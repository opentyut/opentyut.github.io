# Repository Guidelines

## 项目结构与模块组织

本仓库是 OpenTYUT 的 VitePress 文档站点。主要内容由 Markdown 页面组成，分布在根目录和各主题目录中：

- `guide/`、`resources/`、`survival/`、`admission/`：已发布的网站页面。
- `.vitepress/config.ts`：站点元信息、导航、侧边栏、搜索分词和 VitePress 配置。
- `public/`：从站点根路径访问的静态资源，如 `logo.svg`、favicon 和图片。
- `_template.md`：新建页面模板，包含必要的 frontmatter。
- `docs/`：内部规格和规划文档，已在 VitePress 配置中排除发布。

## 构建、测试与本地开发命令

- `npm install`：安装本地开发依赖。
- `npm run dev`：启动本地 VitePress 预览，通常访问 `http://localhost:5173`。
- `npm run build`：构建生产站点到 `.vitepress/dist`；修改导航、配置或页面结构后必须运行。
- `npm run preview`：本地预览已构建的生产版本。

CI 使用 Node 20，依次运行 `npm ci` 和 `npm run build`，然后部署到 GitHub Pages。

## 编码风格与命名约定

内容使用清晰的 Markdown 编写。标题层级应顺序递进，不要跳级；代码块需标注语言；外链使用完整 URL。图片放在 `public/` 下，并用根路径引用，例如 `/tyut-open-source-community.png`。

每个发布的 `.md` 页面都必须包含 frontmatter：

```yaml
---
title: 页面标题 | OpenTYUT
description: 页面描述，用一句话概括内容，建议 120-160 字以内
---
```

新文件名优先使用小写英文 slug，例如 `resources/dev-setup.md`。已有中文文件名可以保持不变。

## 测试指南

本项目没有独立的单元测试套件。将 `npm run build` 作为必要验证步骤。内容变更还应运行 `npm run dev`，在浏览器中手动检查编辑页面、侧边栏链接、图片和排版。

## 提交与 Pull Request 规范

提交信息采用 Conventional Commits，并与现有历史保持一致：

- `feat: add site favicon`
- `fix: 修正 Git 指南中的死链`
- `docs: 更新 README 贡献说明`

分支名使用 `feat/xxx`、`fix/xxx`、`docs/xxx` 或 `chore/xxx`。PR 应包含简要变更说明、变更类型、相关 Issue；涉及 UI 或排版变化时附截图。提交前确认没有无关文件、密钥、生成缓存或 `node_modules`。

## 安全与内容注意事项

不要提交个人隐私、密码、API Key 或未公开的校内记录。课程、政策等信息应先核实准确性；基于个人经验的建议需注明适用前提。
