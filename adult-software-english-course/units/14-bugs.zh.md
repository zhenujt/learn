# 第 14 课：报告与复现缺陷

[English](14-bugs.md) · [目录](../README.zh.md) · [下一课](15-requirements.zh.md)

## 目标与词汇

让别人能复现你观察到的问题。bug 软件缺陷；reproduce 复现；step 步骤；expected 预期的；actual 实际的；browser 浏览器；version 版本；blank 空白的；save 保存；evidence 证据。

## 对话与阅读

A: What happens when you save the form? 保存表单时发生什么？
B: The page turns blank after I click Save. 点 Save 后页面变空白。
A: What did you expect? 预期是什么？
B: I expected a confirmation message. 预期有确认消息。
A: Which browser and version are you using? 用什么浏览器和版本？
B: Browser Q, version 12, in the test environment. 测试环境，Q 浏览器 12 版。
A: Does it happen every time? 每次都发生吗？
B: It happened in all three attempts. I haven't checked other browsers. 三次都发生，其他浏览器没查。

阅读：**Bug B-7. Environment: test, Browser Q 12. Steps: sign in with a test account; open Profile; change the display name; click Save. Expected: a confirmation message. Actual: blank page. Occurrence: 3 of 3 attempts. Other browsers: not tested.** 测试环境登录测试账号，打开个人资料，改显示名，保存；应有确认、实际白屏；三次均发生，其他浏览器未测。产品和版本为虚构。白屏本身不能证明数据是否保存。

## 句型说明

可重复现象用 when/after + 现在时：`The page turns blank when I click Save.` 已完成的尝试用过去时：`It happened three times.`

`I expected the page to show a message` 说明预期。`It may be a browser issue` 是猜测；`It is a browser issue` 是断言原因。证据不足时不要把假设说成事实。

步骤以原形开头：Open、Click。书面报告写控件名，不只写 click here（点这里）。

## 练习

1. It happens when she ___ (click) Save.
2. 尚未确认原因，把 The database is broken 改成谨慎假设。
3. 根据阅读写一组预期与实际。
4. 已确认丢数据了吗？其他浏览器测了吗？
5. 问发生频率。

## 听说读写任务

隐藏脚本听触发动作、预期、环境、频率。把三次都发生改为三次中一次，解释区别。

报告者保存后看不到确认；调查者不知道环境和步骤。问到能在纸上重复步骤为止。增加事实：刷新后看到了修改后的名字。修改报告，但不要声称已知根因。

写 70–100 词缺陷报告：事实标题、环境、步骤、预期、实际、未知项，可用列表。不把密码、个人数据或未脱敏日志放进公开练习工具。

<details>
<summary>答案与示例</summary>

1. clicks。2. It might be a database issue, but the cause is not confirmed. 可能是数据库问题，但原因未确认。3. Expected: confirmation message. Actual: blank page. 预期确认，实际空白。4. 都没有。5. Does it happen every time? / How often does it happen? 每次都发生吗？/ 多久发生一次？

听力：保存、确认消息、Q 12 测试环境、三次都发生。一比三是间歇性，不是每次都出现。

示例：**Blank page after saving a profile.** In the test environment on Browser Q 12, sign in with a test account, open Profile, change the display name, and click Save. I expected a confirmation message, but the page became blank. This happened in all three attempts. After refreshing, I could see the updated name. I haven't tested other browsers, and the cause is not confirmed. Could someone check the page error logs?

意思：列出环境和步骤、白屏与三次频率；刷新可见新名字；其他浏览器未测、根因未知，请查页面日志。

</details>

## 检查

别人是否不用猜就能复现？复习过去尝试与现在可重复现象，未测试范围也要交代。