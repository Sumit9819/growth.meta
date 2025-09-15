
'use server';

import { adminDb } from '@/lib/firebase';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

export async function updateProject(id: string, formData: FormData) {
  const updatedProject = {
    title: formData.get('title'),
    description: formData.get('description'),
    imageUrl: formData.get('imageUrl'),
    url: formData.get('url'),
  };

  await adminDb.collection('projects').doc(id).update(updatedProject);

  revalidatePath('/admin/projects');
  redirect('/admin/projects');
}

export async function deleteProject(id: string) {
  await adminDb.collection('projects').doc(id).delete();
  revalidatePath('/admin/projects');
}
