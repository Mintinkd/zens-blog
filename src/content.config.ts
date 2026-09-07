import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// 文章集合：每篇 Markdown 即一篇文章，文件名即 slug。
// 新增文章 = 在 src/content/posts/ 丢一个 .md，构建时自动出页。
const posts = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/posts' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    category: z.string(),
    tags: z.array(z.string()).default([]),
    // 封面渐变配色，对应画布的 cover--blue/green/purple
    cover: z.enum(['blue', 'green', 'purple']).default('blue'),
    readingTime: z.string().optional(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { posts };
