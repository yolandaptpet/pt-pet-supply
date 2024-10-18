import { writeFileSync } from 'fs';
import path from 'path';
import { z } from 'zod';

const postSchema = z.object({
  title: z.string().max(40, 'Title must be 40 characters or less.'),
  description: z.string().max(140, 'Description must be 140 characters or less.'),
  tags: z.array(z.string()),
  body: z.string(),
});

// Infer the type from Zod schema
type PostData = z.infer<typeof postSchema>;

export async function post({ request }: { request: Request }): Promise<Response> {
  try {
    const data: PostData = await request.json();

    // Validate the incoming data with Zod
    const validation = postSchema.safeParse(data);
    if (!validation.success) {
      return new Response(JSON.stringify({ errors: validation.error.errors }), { status: 400 });
    }

    const post = validation.data;
    const postFileName = `${post.title.replace(/\s+/g, '-').toLowerCase()}.md`;
    const postFilePath = path.join(process.cwd(), 'src/content/blog', postFileName);

    const fileContent = `---
title: "${post.title}"
description: "${post.description}"
tags: ${JSON.stringify(post.tags)}
---

${post.body}
`;

    // Write the post to the content collection
    writeFileSync(postFilePath, fileContent);

    return new Response(JSON.stringify({ message: 'Post submitted successfully!' }), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ error: 'Failed to submit post' }), { status: 500 });
  }
}
