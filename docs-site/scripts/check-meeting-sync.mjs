import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

export class MeetingDocumentSync {
  constructor(meetingRoot, learnRoot) {
    this.meetingRoot = meetingRoot;
    this.learnRoot = learnRoot;
  }

  verify(allowMissingMeeting = false) {
    const publishedDocument = path.join(this.learnRoot, "meeting-english-phrases.md");
    if (!fs.existsSync(publishedDocument)) {
      throw new Error("The published meeting English document is missing.");
    }
    if (!fs.existsSync(this.meetingRoot)) {
      if (allowMissingMeeting) {
        return "CI: Meeting checkout unavailable; cross-project synchronization was NOT verified.";
      }
      throw new Error(`Meeting checkout unavailable: ${this.meetingRoot}`);
    }
    const files = [
      "meeting-english-phrases.md",
      "meeting-english-phrases.zh.md",
      ".github/instructions/meeting-learn-sync.instructions.md",
      ".github/instructions/meeting-learn-sync.instructions.zh.md",
    ];
    for (const file of files) {
      const meetingFile = path.join(this.meetingRoot, file);
      const learnFile = path.join(this.learnRoot, file);
      if (!fs.existsSync(meetingFile) || !fs.existsSync(learnFile)) {
        throw new Error(`Missing synchronized counterpart: ${file}`);
      }
      if (!fs.readFileSync(meetingFile).equals(fs.readFileSync(learnFile))) {
        throw new Error(`Synchronization conflict: ${file}. Reconcile both copies before building.`);
      }
    }
    return "Meeting / learn: both document languages and synchronization rules match.";
  }
}

if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  const learnRoot = fileURLToPath(new URL("../../", import.meta.url));
  const meetingRoot = path.resolve(learnRoot, "../Meeting");
  try {
    console.log(new MeetingDocumentSync(meetingRoot, learnRoot).verify(process.env.CI === "true"));
  } catch (error) {
    console.error(error.message);
    process.exitCode = 1;
  }
}