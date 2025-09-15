
'use server';

import { sql } from '@vercel/postgres';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

export async function createProject(formData: FormData) {
  const title = formData.get('title') as string;
  const description = formData.get('description') as string;
  const github_url = formData.get('github_url') as string;

  await sql`
    INSERT INTO projects (title, description, github_url)
    VALUES (${title}, ${description}, ${github_url})
  `;

  revalidatePath('/admin/projects');
  redirect('/admin/projects');
}

export async function updateProject(projectId: number, formData: FormData) {
  const title = formData.get('title') as string;
  const description = formData.get('description') as string;
  const github_url = formData.get('github_url') as string;

  await sql`
    UPDATE projects
    SET title = ${title}, description = ${description}, github_url = ${github_url}
    WHERE id = ${projectId}
  `;

  revalidatePath('/admin/projects');
  revalidatePath(`/admin/projects/${projectId}/edit`);
  redirect('/admin/projects');
}

export async function deleteProject(projectId: number) {
  await sql`
    DELETE FROM projects
    WHERE id = ${projectId}
  `;

  revalidatePath('/admin/projects');
}
