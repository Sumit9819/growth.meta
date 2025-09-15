
'use server';

import { sql } from '@vercel/postgres';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

export async function createPost(formData: FormData) {
  const title = formData.get('title') as string;
  const slug = formData.get('slug') as string;
  const content = formData.get('content') as string;

  await sql`
    INSERT INTO blog_posts (title, slug, content)
    VALUES (${title}, ${slug}, ${content})
  `;

  revalidatePath('/admin/blog');
  redirect('/admin/blog');
}

export async function updatePost(postId: number, formData: FormData) {
  const title = formData.get('title') as string;
  const slug = formData.get('slug') as string;
  const content = formData.get('content') as string;

  await sql`
    UPDATE blog_posts
    SET title = ${title}, slug = ${slug}, content = ${content}
    WHERE id = ${postId}
  `;

  revalidatePath('/admin/blog');
  revalidatePath(`/admin/blog/${postId}/edit`);
  redirect('/admin/blog');
}

export async function deletePost(postId: number) {
  await sql`
    DELETE FROM blog_posts
    WHERE id = ${postId}
  `;

  revalidatePath('/admin/blog');
}
