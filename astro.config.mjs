// @ts-check
import { defineConfig } from 'astro/config';

// 方案 1：由 Markdown 驱动的静态博客工程（SSG）。
// 部署时把 site 改成你的正式域名即可；本地构建无需改动。
export default defineConfig({
  site: 'https://zens-blog.vercel.app',
  prefetch: true,
  scopedStyleStrategy: 'class',
});
