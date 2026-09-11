# 第 15 课：澄清需求与验收条件

[English](15-requirements.md) · [目录](../README.zh.md) · [下一课](16-reviews.zh.md)

## 目标与词汇

把模糊请求变成可验证的约定。requirement 需求；scope 范围；limit 限制；allow 允许；reject 拒绝；required 必需的；optional 可选的；acceptance criteria 验收条件；edge case 边界或特殊情况。

## 对话与阅读

A: Users need to upload a document. 用户要能上传文档。
B: Which file types should we allow? 允许哪些格式？
A: PDF only for this release. 本次只要 PDF。
B: What is the size limit? 大小上限呢？
A: Ten megabytes, including files exactly at the limit. 十兆字节，正好到上限也包含。
B: What should happen if the file is too large? 文件太大时怎么处理？
A: Show an error and keep the selected file name visible. 显示错误，保留已选文件名。
B: Let me confirm: one PDF at a time, up to ten megabytes. Is that right? 确认一下，每次一个 PDF，最多十兆字节，对吗？
A: Yes. Multiple files are out of scope for now. 对，多文件暂不在范围内。

草稿：**Allow one PDF; reject files above 10 MB; show the file name after rejection; multiple files excluded. Still open: whether an empty PDF is valid and how MB is defined in bytes.** 一个 PDF，大于 10 MB 拒绝，拒绝后显示文件名，不含多文件；空 PDF 是否有效、MB 对应多少字节仍待确认。不要自行补答案。

## 句型说明

must 是必须；must not 是禁止；don't have to 是不必。`Users don't have to add a comment` 不必加评论，不是禁止评论。

should 可能是建议，也可能指期望行为。规格文档中要明确是否强制。这里 up to ten 含十，above ten 不含十，还要明确单位。

间接问题：`Could you clarify which files we allow?` 能说明允许哪些文件吗？内部用 we allow 陈述顺序，不用 do we allow。直接问 `Which files do we allow?` 也可以。

## 练习

1. must not upload 与 don't have to upload 区别是什么？
2. 改错：Could you clarify what should we show?
3. 为超上限文件写一个条件句。
4. 正好 10 MB 按已约定边界允许吗？字节定义已确定吗？
5. 问一个能解决开放问题的问题，不要自行给答案。

## 听说读写任务

不看对话听格式、数量、大小、报错行为、排除项，复述边界请对方确认。

角色卡：需求方要“快速搜索”；开发者问搜索哪些字段、空输入如何处理、响应时间目标。需求方对其中一项回答“需要查一下”。记录为待确认并指定负责人，不能写成已同意。

写 70–100 词上传需求与开放问题，包含正好到上限与刚超过上限的测试，保留字节定义未决状态。

<details>
<summary>答案与示例</summary>

1. 禁止上传与可以不上传。2. Could you clarify what we should show? 可以说明应显示什么吗？3. If the file is above the limit, the page must show an error. 超上限必须报错。4. 允许；没确定。5. Does MB mean 1,000,000 bytes here? 这里 MB 是一百万字节吗？/ Should we accept an empty PDF? 接受空 PDF 吗？

听力：单个 PDF、含上限十兆字节、超限报错保留文件名、不含多文件。

示例：Users can select one PDF per upload. The maximum size is 10 MB, including files exactly at the agreed limit. Files above that limit must be rejected with an error, while the selected file name remains visible. We will test one PDF at the limit and another just above it. Multiple-file upload is out of scope. Before implementation, the requester must confirm the byte definition of MB and whether empty PDFs are allowed.

意思：单 PDF，含上限，超限拒绝但保留名称，测等于与大于边界，不做多文件，实现前确认单位和空文件。

</details>

## 检查

测试者能否区分接受与拒绝？团队能否看出哪些仍未决定？复习第 12 课条件与第 5 课澄清。