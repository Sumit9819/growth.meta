'use server';

import { db } from '@/lib/db';
import { revalidatePath } from 'next/cache';

export async function createAuthor(name: string, pictureUrl: string) {
  await db.query`INSERT INTO authors (name, picture_url) VALUES (${name}, ${pictureUrl})`;
  revalidatePath('/authors');
}
