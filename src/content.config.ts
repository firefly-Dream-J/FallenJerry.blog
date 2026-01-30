import { defineCollection, z } from 'astro:content';
// 删除或注释掉这一行： import { glob } from 'astro/loaders';

const blog = defineCollection({
    // ❌ 删除或注释掉 loader 这一行，让它恢复为标准的文件系统模式
    // loader: glob({ base: './src/content/blog', pattern: '**/*.{md,mdx}' }),

    // Type-check frontmatter using a schema
    schema: ({ image }) =>
        z.object({
            title: z.string(),
            description: z.string(),
            // Transform string to Date object
            pubDate: z.coerce.date(),
            updatedDate: z.coerce.date().optional(),
            heroImage: image().optional(),
            tags: z.array(z.string()).optional(),
        }),
});

export const collections = { blog };