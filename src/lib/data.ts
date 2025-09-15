import { createKysely } from '@vercel/postgres-kysely';

export interface Post {
  id: number;
  title: string;
  content: string;
  author_id: number;
  created_at: string;
  author_name: string;
  author_avatar_url: string;
}

export interface Author {
  id: number;
  name: string;
  avatar_url: string;
  bio: string;
}

interface Database {
    posts: Post;
    authors: Author;
}

export async function getPosts() {
  const db = createKysely<Database>();
  const posts = await db
    .selectFrom('posts')
    .innerJoin('authors', 'authors.id', 'posts.author_id')
    .select([
      'posts.id',
      'posts.title',
      'posts.content',
      'posts.created_at',
      'authors.name as author_name',
      'authors.avatar_url as author_avatar_url',
    ])
    .orderBy('posts.created_at', 'desc')
    .execute();
  return posts;
}

export async function getAuthors() {
  const db = createKysely<Database>();
  const authors = await db.selectFrom('authors').selectAll().execute();
  return authors;
}

export async function getPost(id: number) {
  const db = createKysely<Database>();
  const post = await db
    .selectFrom('posts')
    .innerJoin('authors', 'authors.id', 'posts.author_id')
    .select([
      'posts.id',
      'posts.title',
      'posts.content',
      'posts.created_at',
      'authors.name as author_name',
      'authors.avatar_url as author_avatar_url',
    ])
    .where('posts.id', '=', id)
    .executeTakeFirst();
  return post;
}

export async function searchPosts(query: string) {
  const db = createKysely<Database>();
  const posts = await db
    .selectFrom('posts')
    .innerJoin('authors', 'authors.id', 'posts.author_id')
    .select([
      'posts.id',
      'posts.title',
      'posts.content',
      'posts.created_at',
      'authors.name as author_name',
      'authors.avatar_url as author_avatar_url',
    ])
    .where('posts.title', 'ilike', `%${query}%`)
    .orderBy('posts.created_at', 'desc')
    .execute();
  return posts;
}
