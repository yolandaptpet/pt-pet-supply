// src/content/config.ts
import { defineCollection, z } from "astro:content";

// Define the schema for a blog post
const blogPostSchema = z.object({
  title: z.string(),
  description: z.string(),
  publishDate: z.coerce.date(),
  tags: z.array(z.string()),
});

// Define the collection for blog posts
export const collections = {
  blog: defineCollection({
    schema: blogPostSchema, // Use the schema defined above
  }),
};
