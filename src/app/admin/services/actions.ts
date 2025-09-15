
'use server';

import { sql } from '@/lib/db';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

export async function createService(formData: FormData) {
  const title = formData.get('title') as string;
  const description = formData.get('description') as string;
  const icon = formData.get('icon') as string;
  const order = Number(formData.get('order'));

  await sql`
    INSERT INTO services (title, description, icon, "order")
    VALUES (${title}, ${description}, ${icon}, ${order})
  `;

  revalidatePath('/admin/services');
  redirect('/admin/services');
}

export async function updateService(formData: FormData) {
  const id = formData.get('id') as string;
  const title = formData.get('title') as string;
  const description = formData.get('description') as string;
  const icon = formData.get('icon') as string;
  const order = Number(formData.get('order'));

  await sql`
    UPDATE services
    SET title = ${title}, description = ${description}, icon = ${icon}, "order" = ${order}
    WHERE id = ${id}
  `;

  revalidatePath('/admin/services');
  redirect('/admin/services');
}

export async function deleteService(formData: FormData) {
  const id = formData.get('id') as string;

  await sql`
    DELETE FROM services
    WHERE id = ${id}
  `;

  revalidatePath('/admin/services');
}
