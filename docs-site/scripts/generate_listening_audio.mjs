import fs from "node:fs";
import path from "node:path";
import crypto from "node:crypto";
import { spawnSync } from "node:child_process";
import { fileURLToPath } from "node:url";
import { unified } from "unified";
import remarkParse from "remark-parse";

class ListeningAudioGenerator {
  root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "../..");
  course = path.join(this.root, "adult-software-english-course");
  output = path.join(this.root, "docs-site/public/audio/listening");
  voices = [
    { id: "michelle-us", name: "Michelle (US)", voice: "en-US-MichelleNeural" },
    { id: "sonia-uk", name: "Sonia (UK)", voice: "en-GB-SoniaNeural" },
  ];

  text(node) {
    return node.value ?? (node.children ?? []).map((child) => this.text(child)).join("");
  }

  cards(content) {
    const nodes = unified().use(remarkParse).parse(content).children;
    const cards = [];
    let current;
    for (const node of nodes) {
      if (node.type === "html" && node.value.includes("<summary>Reader card ")) {
        const match = node.value.match(/Reader card (\d+)/);
        current = { id: Number(match[1]), offset: node.position.start.offset, lines: [] };
      } else if (current && node.type === "html" && node.value.trim() === "</details>") {
        current.text = current.lines.join("\n\n");
        if (!current.text || /[\u3400-\u9fff]/.test(current.text)) throw new Error("Invalid English reader card");
        cards.push(current);
        current = undefined;
      } else if (current && node.type === "paragraph") {
        current.lines.push(this.text(node).replace(/^[A-Za-z][A-Za-z ]*:\s*/, ""));
      }
    }
    if (cards.length !== 10 || cards.some((card, index) => card.id !== index + 1)) {
      throw new Error("Expected reader cards 1 through 10, without answers");
    }
    return cards;
  }

  run() {
    const englishFile = path.join(this.course, "04-listening-lab.md");
    const cards = this.cards(fs.readFileSync(englishFile, "utf8"));
    if (process.argv.includes("--dry-run")) {
      console.log(JSON.stringify(cards.map(({ id, text }) => ({ id, text })), null, 2));
      return;
    }
    fs.mkdirSync(this.output, { recursive: true });
    for (const card of cards) {
      card.audio = this.voices.map((voice) => {
        const hash = crypto.createHash("sha256").update(`${voice.voice}|-15%|${card.text}`).digest("hex").slice(0, 12);
        const filename = `lab-${String(card.id).padStart(2, "0")}-${voice.id}-${hash}.mp3`;
        const destination = path.join(this.output, filename);
        if (!fs.existsSync(destination) || fs.statSync(destination).size === 0) {
          const temporary = `${destination}.tmp.mp3`;
          const result = spawnSync(path.join(this.root, ".venv/bin/edge-tts"), [
            "--voice", voice.voice, "--rate=-15%", "--text", card.text, "--write-media", temporary,
          ], { encoding: "utf8", timeout: 120000 });
          if (result.status !== 0 || !fs.existsSync(temporary) || !fs.statSync(temporary).size) {
            fs.rmSync(temporary, { force: true });
            throw new Error(`TTS failed for lab ${card.id}: ${result.error ?? result.stderr}`);
          }
          fs.renameSync(temporary, destination);
        }
        console.log(`Ready: ${filename}`);
        return { ...voice, src: `audio/listening/${filename}` };
      });
    }
    for (const filename of ["04-listening-lab.md", "04-listening-lab.zh.md"]) {
      const file = path.join(this.course, filename);
      let content = fs.readFileSync(file, "utf8").replace(/<!-- listening-audio:start -->[\s\S]*?<!-- listening-audio:end -->\n\n/g, "");
      for (const card of cards) {
        const label = filename.endsWith(".zh.md") ? "朗读卡" : "Reader card";
        const opening = new RegExp(`<details>\\n<summary>${label} ${card.id}(?=[<：:])`);
        if (!opening.test(content)) throw new Error(`Missing card ${card.id} in ${filename}`);
        const players = card.audio.map((audio) => `<p>${audio.name}</p>\n<audio controls preload="none" style="width:100%;max-width:480px" aria-label="Lab ${card.id} ${audio.name}" src="${audio.src}"></audio>`).join("\n\n");
        content = content.replace(opening, (match) => `<!-- listening-audio:start -->\n${players}\n<!-- listening-audio:end -->\n\n${match}`);
      }
      fs.writeFileSync(file, content);
    }
  }
}

new ListeningAudioGenerator().run();