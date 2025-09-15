
'use server';

import { adminDb } from "@/lib/firebase";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function createPost(formData: FormData) {
  const title = formData.get('title') as string;
  const content = formData.get('content') as string;

  await adminDb.collection('blog').add({
    title,
    content,
    createdAt: new Date(),
  });

  revalidatePath('/admin/blog');
  redirect('/admin/blog');
}

export async function updatePost(id: string, formData: FormData) {
  const title = formData.get('title') as string;
  const content = formData.get('content') as string;

  await adminDb.collection('blog').doc(id).update({
    title,
    content,
  });

  revalidatePath('/admin/blog');
  redirect('/admin/blog');
}

export async function deletePost(id: string) {
  await adminDb.collection('blog').doc(id).delete();
  revalidatePath('/admin/blog');
}
