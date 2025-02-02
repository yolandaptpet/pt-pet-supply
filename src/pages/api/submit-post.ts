import { writeFileSync } from 'fs';
import path from 'path';
import { z } from 'zod';

const postSchema = z.object({
  title: z.string().max(40, 'Title must be 40 characters or less.'),
  description: z.string().max(140, 'Description must be 140 characters or less.'),
  publishDate: z.string().regex(/^\d{4}-\d{2}-\d{2}$/, 'Date must be in YYYY-MM-DD format'),
  tags: z.array(z.string()),
  body: z.string(),
});

type PostData = z.infer<typeof postSchema>;

export const POST = async ({ request }: { request: Request }) => {
  try {
    const data: PostData = await request.json();

    const validation = postSchema.safeParse(data);
    if (!validation.success) {
      return new Response(JSON.stringify({ errors: validation.error.errors }), { 
        status: 400, 
        headers: { 'Content-Type': 'application/json' } 
      });
    }

    const post = validation.data;

    const postFileName = `${post.title.replace(/\s+/g, '-').toLowerCase()}.md`;
    const postFilePath = path.join(process.cwd(), 'src/content/blog', postFileName);

    const fileContent = `---
title: "${post.title}"
description: "${post.description}"
publishDate: ${post.publishDate}
tags: [${post.tags.map(tag => `"${tag}"`).join(', ')}]
---

${post.body}
`;

    writeFileSync(postFilePath, fileContent);

    return new Response(
      JSON.stringify({ message: 'Post submitted successfully!' }), 
      {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      }
    );

  } catch (error) {
    console.error('Error occurred while submitting post:', error);
    return new Response(
      JSON.stringify({ error: 'Failed to submit post' }), 
      {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      }
    );
  }
}

export default POST;