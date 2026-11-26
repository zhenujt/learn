# learn-english

> [English version](README.md)

## 从这里开始

**主线教材：[软件开发会议英语：从看懂字幕到开口汇报](dev-meeting-english/README.zh.md)**

面向在中国工作、需要参加英文站会和周会（有字幕）的软件工程师。语法从小学到高中按知识点合并成 24 课，每个知识点都按你们真实会议的使用频率标注「必学 / 常用 / 认得即可 / 用不到」，再配 7 个会议场景、字幕精读和阶段测验。

1. [学习计划：16 周，每天 40 分钟](dev-meeting-english/00-study-plan.zh.md)
2. [怎么读会议字幕](dev-meeting-english/01-how-to-read-subtitles.zh.md)
3. [语法目录（G01–G24）](dev-meeting-english/grammar/README.zh.md)
4. [会议场景（M01–M07）](dev-meeting-english/meetings/README.zh.md)

## 继续使用的参考资料

| 资料 | 说明 |
| --- | --- |
| [会议高频表达](meeting-english-phrases.zh.md) | 由会议字幕自动整理，与 Meeting 项目保持同步 |
| [会议高频词](meeting-frequent-words.zh.md) | 同上 |
| [会议完整词表](meeting-complete-vocabulary.zh.md) | 会议里出现过的所有词 |
| [发音入门](zero-to-work-english/01-发音入门/README.md) | 音标、重音、连读 |
| [1000 高频词](zero-to-work-english/99-词汇表/1000高频词.md) | 通用词汇 |
| [数字、年份、月份与星期](numbers-years-months-weekdays.zh.md) | 数字和日期读法 |
| [平台演示稿](demo-platform.md) | 专题演示材料 |

## 存档资料

旧教材不再更新。查找对应的新课或旧资料的独有内容，请看[旧资料去向](dev-meeting-english/README.zh.md#旧资料去向)。

## 文档导航

打开文档链接或切换文档时，左侧导航会展开当前文档所在分组，并在滚动范围允许时将高亮条目移到左栏中间，不会改变正文的阅读位置。手机上打开导航菜单即可看到当前条目。

## 文档音频

文档网站会在每篇 Markdown 标题下显示音频区域。生成后的音频依次朗读每组已有中英例句：中文一遍，然后使用慢速 `en-US-MichelleNeural` 朗读英文三遍。

安装 `edge-tts` 和 FFmpeg 后，可以生成单篇文档音频：

```sh
npm --prefix docs-site run audio:document -- "path/to/lesson.zh.md"
```

也可以增量生成所有符合条件的文档：

```sh
npm --prefix docs-site run audio:all
```

语音分段缓存位于 `docs-site/.audio-cache`，最终 MP3 位于 `docs-site/public/audio/documents`。

## 备注

https://dict.youdao.com/pronounce/base?product=webdict&appVersion=1&client=web&mid=1&vendor=web&screen=1&model=1&imei=1&network=wifi&keyfrom=dick&keyid=voiceDictWeb&mysticTime=1789216622238&yduuid=abcdefg&le=&phonetic=&rate=4&word=Do%20you%20know&type=2&id=&sign=9caa673a641fb61b7fa68a63690c422f&pointParam=appVersion,client,imei,keyfrom,keyid,mid,model,mysticTime,network,product,rate,screen,type,vendor,word,yduuid,key
