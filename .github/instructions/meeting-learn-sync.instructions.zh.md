# Meeting / Learn 强制双向同步规则

- 本规则跨工作区适用于 `/Users/czheng1/Desktop/Meeting` 和 `/Users/czheng1/Desktop/learn`。
- 两个项目根目录都必须保留逐字节一致的 `meeting-english-phrases.md`、`meeting-english-phrases.zh.md`、`meeting-frequent-words.md` 和 `meeting-frequent-words.zh.md`。
- 每次更新会议语料内容时，都必须在同一任务内同时更新英文表达页、英文词汇页及对应的中文页，并将四份文档同步到两个项目。
- 任意一边都可以作为本次修改起点。修改前读取两边，先合并已有差异，不能覆盖用户改动；在同一任务内更新两边，不固定某一边为唯一来源。
- 中英文语义保持一致。任何对应文件缺失或不同步时，都不能宣布完成；无法访问另一项目时必须报告阻塞。
- 本规则的中英文文件必须在两个项目的 `.github/instructions/` 以及用户 VS Code prompts 目录内保持一致；修改规则时也要更新全部副本。
- 完成共享文档任务或构建网站前，在 `learn/docs-site` 执行 `npm run check:meeting-sync`。本地缺文件或内容不一致时必须阻止构建；检查不会自动覆盖文件。
- 网站路由为站点基础路径下的 `/meeting-english-phrases/`，所有环境默认显示 `meeting-english-phrases.zh.md`，通过 `?doc=meeting-english-phrases.md` 可选择英文。生产构建（包括 CI）必须包含两份文档。用户已于 2026-09-30 明确允许发布这份中文文档；仅此文件豁免中文 Markdown 的提交和发布限制，其他中文 Markdown 仍只保留本地。原始会议转录不发布。
- 指令约束代理操作，不是后台文件监听器。浏览器或手工修改后，构建前仍须将两边本地副本同步。CI 无法核对独立的本地 Meeting 项目，必须明确提示该限制。
- 同步不代表授权提交、推送、创建分支或 PR、部署。上述操作需要明确授权；没有特别许可不能直接推送默认分支。