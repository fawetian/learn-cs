import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import { unified } from "@astrojs/markdown-remark";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import { site, sidebar } from "./sites.config.mjs";

export default defineConfig({
  site: site.url,
  base: "/",
  trailingSlash: "always",
  outDir: "./dist",
  server: { port: site.devPort },
  markdown: {
    processor: unified({
      remarkPlugins: [remarkMath],
      rehypePlugins: [rehypeKatex],
    }),
  },
  integrations: [
    starlight({
      title: site.label,
      description: site.description,
      locales: { root: { label: "简体中文", lang: "zh-CN" } },
      defaultLocale: "root",
      customCss: ["katex/dist/katex.min.css", "./src/styles/site.css"],
      components: {
        Header: "./src/components/Header.astro",
        Sidebar: "./src/components/Sidebar.astro",
      },
      markdown: { processedDirs: ["../content"] },
      tableOfContents: { minHeadingLevel: 2, maxHeadingLevel: 3 },
      sidebar,
    }),
  ],
});
