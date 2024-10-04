import { z, defineCollection } from 'astro:content';

// Define the blog collection schema
const blogCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishDate: z.date(),
    tags: z.array(z.string()).optional(),
  }),
});

export const collections = {
  blog: blogCollection,
};
