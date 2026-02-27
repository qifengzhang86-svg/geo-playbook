# GEO 资讯网站

以生成式引擎优化（GEO）为主题的资讯站，基于 Next.js 静态导出，使用本地 Markdown 作为内容源，支持 SEO/GEO 优化与广告位预留。

## 技术栈

- **Next.js**（App Router）+ **Tailwind CSS**
- **本地 Markdown**：文章存放在 `content/` 目录，构建时解析
- **部署**：静态导出，可部署至 Cloudflare Pages、Vercel、Netlify 等

## 本地开发

### 环境要求

- Node.js 18+
- npm

### 安装与运行

```bash
# 安装依赖
npm install

# 启动开发服务器
npm run dev
```

在浏览器打开 [http://localhost:3000](http://localhost:3000) 查看站点。

### 构建静态站

```bash
npm run build
```

构建产物输出到 `out/` 目录，可将该目录部署到任意静态托管服务。

### 环境变量（可选）

| 变量名 | 说明 |
|--------|------|
| `NEXT_PUBLIC_SITE_URL` | 站点完整 URL，用于 sitemap、OG、JSON-LD 等。示例：`https://your-domain.com` |

未设置时默认使用 `https://geo-info.example.com`。

## 部署到 Cloudflare Pages

### 通过 GitHub 连接

1. 将本仓库推送到 GitHub。
2. 登录 [Cloudflare Dashboard](https://dash.cloudflare.com) → **Workers & Pages** → **Create application** → **Pages** → **Connect to Git**。
3. 选择该仓库，配置构建：
   - **Build command**：`npm run build`
   - **Build output directory**：`out`
   - **Root directory**：默认（项目根目录）
4. 若使用自定义域名，在 **Custom domains** 中添加域名并按提示配置 DNS。
5. 在 **Settings** → **Environment variables** 中可添加 `NEXT_PUBLIC_SITE_URL`（例如 `https://your-domain.com`），以便 sitemap 与 OG 使用正确域名。

### 构建说明

- 本项目使用 Next.js 的 **静态导出**（`output: 'export'`），无需 Node 运行时。
- 每次推送到所选分支（通常为 `main`）会自动触发构建与发布。

## 内容规范

### 新增文章

1. 在 `content/` 目录下新建 `.md` 文件，文件名将作为 URL 中的 slug（例如 `what-is-geo.md` → `/articles/what-is-geo`）。
2. 在文件顶部填写 **frontmatter**（YAML），必须包含以下字段：

| 字段 | 类型 | 说明 |
|------|------|------|
| `title` | string | 文章标题 |
| `description` | string | 摘要，用于列表与 SEO description |
| `date` | string | 发布日期，建议格式 `YYYY-MM-DD` |
| `category` | string | 分类名，与站内分类列表一致（如：GEO 基础、策略与案例、工具与实操、行业动态） |
| `slug` | string | 可选，与文件名一致时可省略 |
| `featured` | boolean | 可选，为 `true` 时在首页「推荐阅读」中展示 |

3. frontmatter 下方为正文，使用标准 Markdown（支持 GFM、代码块等）。

### 示例

```markdown
---
title: "你的文章标题"
description: "简短摘要，用于列表与 SEO。"
date: "2025-02-20"
category: "GEO 基础"
slug: "your-slug"
featured: false
---

正文从下一行开始...
```

## 广告接入

站点已预留广告位组件 `components/AdSlot.tsx`，在首页、文章页（顶部/中部/底部/侧栏）、分类页等位置插入。接入 Google AdSense 时：

1. 在对应广告位的容器内插入 AdSense 提供的脚本与 `ins` 标签（可替换或包裹现有占位 div）。
2. 确保已阅读并遵守 [AdSense 政策](https://support.google.com/adsense/answer/48182)，且页脚已链接至隐私政策页。

## 其他

- **Lint**：`npm run lint`
- **Sitemap**：构建后生成 `/sitemap.xml`，可在 Google Search Console 中提交。
- **robots.txt**：构建后生成 `/robots.txt`，默认允许所有爬虫并指向 sitemap。
