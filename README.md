# learn-cs

计算机学习仓库。核心思路是**学习 IPO 链路**：每学一个 topic，走完 Input → Process → Output 的完整闭环，用输出倒逼输入和加工，加深学习深度。

学习路线参考：[CS 自学指南](https://csdiy.wiki/)

```
输入 Input          加工 Process         输出 Output
_book/     书籍 ──┐
_resource/ 资料 ──┼→  note/     长文 ──→  _publish/  渠道稿（知乎/公众号/小红书/X）
                  │    _mindmap/ 思维导图 →  _deck/     Anki 牌组
                  └→   _asset/   配图 ──→  site/      网站
```

## 目录结构

```
content/                    # 内容层：唯一事实来源，不绑任何输出形式
├── os/                     # 领域目录：os / ds / algo / db / net
│   ├── index.mdx           #   领域导读（网站的领域首页）
│   ├── note/               #   全部文章，平铺，一篇一个 .mdx 文件
│   ├── _asset/             #   配图素材，按 topic 归档
│   ├── _book/              #   书籍、教材资料
│   ├── _mindmap/           #   思维导图，按 topic 归档
│   ├── _resource/          #   其他资料（链接、论文、讲义等）
│   ├── _deck/              #   Anki 牌组，按 topic 归档
│   └── _publish/           #   渠道稿，按 topic 归档
│       └── <topic>/
│           ├── zhihu.md        # 知乎文章版
│           ├── wechat.md       # 公众号版
│           ├── xiaohongshu.md  # 小红书短文案 + 贴图清单
│           └── x.md            # X 帖子/线程
├── ds/  algo/  db/  net/  golang/  arch/   # 其余学科，目录结构与 os/ 完全相同
└── README.md               # 本文件
```

## 约定

- **`note/` 平铺**：一篇文章一个 `.mdx` 文件，文件名即 topic，目录里一目了然。需要控制顺序时在文件名前加序号（`01-xxx.mdx`）。
- **`_` 前缀 = 非网页内容**：带 `_` 前缀的目录是资料和产物，网站构建时自动排除，但对人和其他输出形式完全可读。
- **topic 内聚**：一个主题的渠道稿、配图、导图、牌组都按相同的 topic 名归档在各自目录下，互相对照方便。
- **渠道稿是改写，不是复制**：公众号要排版和封面、小红书是短文案加贴图、X 是线程、知乎对公式支持差——四份稿子各有约束，独立成文。

## 一个 topic 的完整流程

1. **Input**：把书籍、论文、讲义放进 `_book/`、`_resource/`。
2. **Process**：在 `note/` 写长文 `<topic>.mdx`（配图放 `_asset/<topic>/`，文中用 `../_asset/<topic>/xxx.png` 引用）；需要时画 `_mindmap/` 梳理结构。
3. **Output**：
   - 在 `_publish/<topic>/` 改写各渠道稿，分别发布到知乎、公众号、小红书、X；
   - 把值得记住的知识点整理成 `_deck/<topic>/` 的 Anki 牌组；
   - 长文自动进入网站（见下）。

## 网站输出

网站只是输出形式之一。工程在 `site/`（Astro + Starlight），是一个**单一站点**：一个域名、一个端口，学科是站内栏目。它只读取 `content/` 各领域的 `index.mdx` 和 `note/`（`_` 前缀目录自动排除）。

- 域名：`https://cs.anme.cc`，路由按学科分层：`/os/`、`/ds/note/xxx/` 等
- 首页 `site/src/pages/index.astro` 是总导读；各学科首页是 `content/<学科>/index.mdx`
- 学科导航在顶栏 navbar（`site/src/components/Header.astro`），侧边栏按学科分组自动收录笔记
- 搜索（Pagefind）覆盖全站所有学科

### 常用命令（在 `site/` 下执行）

```bash
npm install       # 首次安装依赖
npm run dev       # 本地开发，默认 4340 端口
npm run build     # astro check + astro build
npm run preview   # 本地预览产物，4350 端口
```

产物输出到 `site/dist/`，`base` 为 `/`，部署时用 Nginx 把 `cs.anme.cc` 映射到该目录即可；DNS、证书与上传另行安排。

### 给网站新增文章

在对应学科的 `content/<学科>/note/` 下新建 `.mdx` 文件，frontmatter 至少写 `title` 和 `description`，侧边栏对应学科分组会自动收录。数学公式用 `$...$` / `$$...$$`（KaTeX）。

## 新增学科

1. 在 `content/` 下建学科目录，包含 `index.mdx` 和全套子目录（`note/`、`_asset/`、`_book/`、`_mindmap/`、`_resource/`、`_deck/`、`_publish/`）；
2. 在本 README 的目录结构里登记；
3. 在 `site/sites.config.mjs` 的 `subjects` 数组里加一项（id、名称、简介），navbar、侧边栏和路由会自动生效。
