---
title: 开源应用推荐 | OpenTYUT
description: 面向大学生的开源软件推荐，涵盖开发工具、效率应用、密码管理、日常工具等，免费好用，告别盗版
---
# 开源应用推荐

## 开发工具
- [**VS Code**](https://github.com/microsoft/vscode) —— 代码编辑器，插件生态丰富，及其适配agent时代
- [**Git**](https://github.com/git/git) —— 版本控制，协作必备
- [**Docker**](https://www.docker.com) —— 容器化部署，环境隔离，减少环境依赖导致的大多数问题，macos也可以用`podman`
- [**Codex**](https://github.com/openai/codex) —— OpenAI 官方 CLI，**闭源**，需付费订阅使用GPT模型，支持 OpenAI 兼容 API，可通过代理或配置兼容端点使用第三方 API
- [**Claude Code**](https://github.com/anthropics/claude-code) —— Anthropic 官方 CLI，代码能力强，**闭源**，需付费订阅后使用Claude系列模型，可通过代理或配置兼容端点使用第三方 API
- [**OpenCode**](https://github.com/anomalyco/opencode) —— 开源编码代理，可自托管，免费灵活，支持外接多种 API，相比 Claude Code 更灵活且免费，避免接入第三方api被注入恶意prompt破坏缓存
- [**CC Switch**](https://github.com/farion1231/cc-switch) —— 跨平台桌面 AI 工具管理助手，支持 [Claude Code](https://github.com/anthropics/claude-code)、[Codex](https://github.com/openai/codex)、[OpenCode](https://github.com/anomalyco/opencode) 等多种 CLI Agent 的统一管理
- [**Trae**](https://www.trae.ai) —— 字节跳动推出的 AI IDE，**闭源**，国际版需付费，国内版免费使用

## 效率
- [**Obsidian**](https://obsidian.md) —— 本地优先的双链笔记（免费但不开源）,可以很好的和大模型协作，提高效率
- [**Logseq**](https://github.com/logseq/logseq) —— 开源大纲笔记，支持双向链接
- [**7-Zip**](https://github.com/ip7z/7zip) —— 压缩解压，支持全格式
- [**draw.io**](https://github.com/jgraph/drawio) —— 免费的在线图表绘制工具，支持流程图、架构图、UML 等，毕设可以使用draw.io结合agent进行绘图
- [**PowerToys**](https://github.com/microsoft/PowerToys) —— 微软官方开源的 Windows 系统增强工具集，包含批量重命名、分屏等功能

## 密码管理
> 密码管理使用跨平台软件可以在多种操作系统上统一存储管理密码，避免跨平台密码不互通，记录不方便。
> 
> 注意：无论使用哪种密码管理器，都应启用主密码强度足够、开启双因素认证，并定期备份加密数据库，防止因软件漏洞或设备丢失导致密码泄露。

- [**Bitwarden**](https://github.com/bitwarden/clients) —— 全平台密码管理器，支持浏览器扩展和移动端，数据默认存储在 Bitwarden 云端（已加密），或可自建服务器完全掌控数据
- [**Keyguard**](https://github.com/AChep/keyguard) —— Bitwarden 的第三方 Android 客户端，UI更简洁好用，数据存储取决于后端配置（云端或自建）
- [**KeePassXC**](https://github.com/keepassxreboot/keepassxc) —— 本地存储密码，数据库文件保存在本地，数据完全掌控在自己手中，适合注重隐私的用户

## 日常
- [**Clash Verge Rev**](https://github.com/clash-verge-rev/clash-verge-rev) —— 基于 Tauri 的跨平台代理客户端，支持多种代理协议。出于某种原因，使用方法自行摸索
- [**ClashMetaForAndroid**](https://github.com/MetaCubeX/ClashMetaForAndroid) —— Android 平台的代理客户端，支持多种代理协议
- [**Shadowrocket**](https://www.shadowrocket.vip) —— iOS 平台的代理客户端（闭源，付费，需在非国区App Store 购买，还有很多类似的软件）
- [**PiliPlus**](https://github.com/bggRGjQaUbCoE/PiliPlus)  —— 优秀的第三方B站全平台无广告客户端，是Flutter全栈跨平台工程化的最佳实践范例
- [**开源阅读**](https://github.com/HapeLee/legado-with-MD3) —— 全文网文小说资源聚合软件，需自行配置[书源](https://github.com/XIU2/Yuedu)，有能力的请支持正版
- [**Hydrogen**](https://github.com/zhihulite/hydrogen) —— 第三方知乎安卓客户端，轻量无广告
- [**LocalSend**](https://github.com/localsend/localsend) —— 跨平台文件传输工具，类似AirDrop或者安卓各家的局域网传输软件
- [**OBS Studio**](https://github.com/obsproject/obs-studio) —— 顶级的视频直播与录屏软件，功能专业且完全免费

## 生活
- [**HowToCook**](https://github.com/Anduin2017/HowToCook) —— 程序员做饭指南，用工程化思维整理菜谱

::: tip 为什么推荐开源？
开源软件免费、透明、无广告，代码公开可审计。与其到处找破解版，不如直接用开源替代方案。
:::

::: warning 开源软件的风险提示
开源不等于零风险。部分开源项目可能存在安全漏洞、维护不及时或供应链攻击等问题。

建议关注项目活跃度与社区响应速度，及时更新至最新版本，敏感场景下优先选择经过广泛审计的成熟项目。
:::
