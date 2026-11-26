# learn-english

> [中文版](README.zh.md)

## Start here

**Main course: [English for Software Meetings: From Reading Subtitles to Giving Updates](dev-meeting-english/README.md)**

This course is for software engineers in China who attend English stand-ups and weekly meetings with subtitles. School grammar from primary to senior high is merged into 24 lessons by topic. Each topic is tagged by how often it appears in real meetings: must learn, common, recognize only, or not needed. Seven meeting scenarios, subtitle drills, and checkpoint tests support the grammar.

1. [Study plan: 16 weeks, 40 minutes a day](dev-meeting-english/00-study-plan.md)
2. [How to read meeting subtitles](dev-meeting-english/01-how-to-read-subtitles.md)
3. [Grammar index (G01–G24)](dev-meeting-english/grammar/README.md)
4. [Meeting scenarios (M01–M07)](dev-meeting-english/meetings/README.md)

## References still in use

| Resource | Notes |
| --- | --- |
| [Meeting phrases](meeting-english-phrases.md) | Generated from meeting subtitles and kept in sync with the Meeting project |
| [Meeting frequent words](meeting-frequent-words.md) | Same source |
| [Complete meeting vocabulary](meeting-complete-vocabulary.md) | Every word that appeared in meetings |
| [Pronunciation basics](zero-to-work-english/01-发音入门/README.md) | Phonetic symbols, stress, and linking |
| [1000 frequent words](zero-to-work-english/99-词汇表/1000高频词.md) | General vocabulary |
| [Numbers, years, months, and weekdays](numbers-years-months-weekdays.md) | Reading numbers and dates |
| [Platform demo script](demo-platform.md) | Demo material |

## Archived material

For archived courses, material unique to those courses, and the lessons that replace them, see [Where the Old Materials Went](dev-meeting-english/README.md#where-the-old-materials-went).

## Document audio

The docs site shows an audio panel below every Markdown title. Generated recordings read each available Chinese prompt once, followed by the matching English example three times with the slow `en-US-MichelleNeural` voice.

Generate one document after installing `edge-tts` and FFmpeg:

```sh
npm --prefix docs-site run audio:document -- "path/to/lesson.zh.md"
```

Generate every eligible document incrementally:

```sh
npm --prefix docs-site run audio:all
```

Speech segments are cached in `docs-site/.audio-cache`, and finished MP3 files are written to `docs-site/public/audio/documents`.
