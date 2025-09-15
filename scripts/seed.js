import dotenv from 'dotenv';
import { createClient } from '@vercel/postgres';

dotenv.config({ path: '.env.local' });

async function seed() {
  const client = createClient({ connectionString: process.env.POSTGRES_URL });
  await client.connect();
  try {
    // Create the 'authors' table if it doesn't exist
    await client.sql`
      CREATE TABLE IF NOT EXISTS authors (
        id SERIAL PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        avatar_url VARCHAR(255)
      );
    `;
    console.log('Seeded authors table');

    // Create the 'posts' table if it doesn't exist
    await client.sql`
      CREATE TABLE IF NOT EXISTS posts (
        id SERIAL PRIMARY KEY,
        title VARCHAR(255) NOT NULL,
        content TEXT NOT NULL,
        author_id INTEGER REFERENCES authors(id) ON DELETE SET NULL,
        created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
      );
    `;
    console.log('Seeded posts table');

  } catch (error) {
    console.error('Error seeding tables:', error);
  } finally {
    await client.end();
  }
}

seed();
