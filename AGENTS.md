# AGENTS.md

这个仓库主要由 Agent 迭代。它是「学习内容 + 多种输出」的仓库：`content/` 是唯一事实来源，`site/` 是输出形式之一（网站）。目录约定和学习流程的完整说明见 [README.md](README.md)，先读它再动手。

## 结构与边界

- `content/<学科>/`：学科目录。`index.mdx` 是学科导读；`note/` 平铺全部文章；`_` 前缀目录（`_asset/` `_book/` `_mindmap/` `_resource/` `_deck/` `_publish/`）是资料与产物，网站不收录。
- `site/`：Astro + Starlight 工程，自包含（自己的 `package.json`）。学科注册表在 `site/sites.config.mjs`。
- 改动遵循最小实现原则：只动任务要求的文件，保护无关文件。

## 常用任务

### 写一篇笔记

1. 在 `content/<学科>/note/` 新建 `<topic>.mdx`，frontmatter 必须含 `title` 和 `description`。
2. 配图放 `content/<学科>/_asset/<topic>/`，文中用 `../_asset/<topic>/xxx.png` 相对路径引用。
3. 数学公式用 `$...$` / `$$...$$`（KaTeX 已启用）。
4. 完成标准：在 `site/` 下 `npm run build` 通过（0 errors），且新文章出现在构建产物 `dist/<学科>/note/<topic>/index.html`。

### 写渠道稿

在 `content/<学科>/_publish/<topic>/` 下建 `zhihu.md`、`wechat.md`、`xiaohongshu.md`、`x.md`。渠道稿是按平台约束的改写，不是长文的复制。

### 新增学科

1. 建 `content/<学科>/` 全套子目录（`note/`、`_asset/`、`_book/`、`_mindmap/`、`_resource/`、`_deck/`、`_publish/`），空目录放 `.gitkeep`。
2. 写 `content/<学科>/index.mdx` 导读和 `content/<学科>/README.md`（包含内容、学习资料、学习方法、其他四节，网站 glob 已排除 README.md）。
3. 在 `site/sites.config.mjs` 的 `subjects` 数组加一项（`id` 必须与目录名一致）——navbar、侧边栏、路由全部自动生效，内容加载无需改动（glob 收录 `content/` 全部、排除 `_` 前缀）。
4. 在 README 目录结构里登记。
5. 完成标准：`npm run build` 通过，`/新增学科/` 路由出现在产物中，navbar 含新学科。

### 改网站工程

在 `site/` 下操作。完成标准：`npm run build`（含 `astro check`）0 errors；改了路由或组件则抽查对应产物 HTML。

## 关键坑（文档和配置里看不出来的）

- **autogenerate 路径**：Starlight 的 `autogenerate.directory` 按「文件相对项目根的路径」匹配，不是文档 ID。内容在项目外的 `../content/` 下，所以 `sites.config.mjs` 里的 directory 必须带 `../content/<学科>/note` 前缀。
- **dev 服务热更新边界**：改 `content/` 下的文章会自动热更新（几秒）；改 `astro.config.mjs`、`sites.config.mjs`、`src/content.config.ts` 必须重启 dev 服务才生效。
- **`src/env.d.ts` 勿删**：Starlight 的 `virtual:starlight/*` 模块没有官方类型声明，这个文件补了最小声明，删了 `astro check` 会报错。
- **顶栏布局**：`Header.astro` 故意不用 Starlight 默认的「搜索框对齐正文列」网格（会在有无侧边栏的页面间漂移），改成了固定 flex。改动顶栏样式时保持这个原则。

## 验证惯例

构建级检查（`npm run build` + 产物 HTML 抽查）是默认验证方式；无法做真实浏览器检查时，在汇报中明确说明哪些只做到了构建级验证。
