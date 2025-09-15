
'use server';

import { adminDb } from '@/lib/firebase';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

export async function createProject(formData: FormData) {
  const newProject = {
    title: formData.get('title'),
    description: formData.get('description'),
    imageUrl: formData.get('imageUrl'),
    url: formData.get('url'),
  };

  await adminDb.collection('projects').add(newProject);

  revalidatePath('/admin/projects');
  redirect('/admin/projects');
}
