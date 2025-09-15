
import { sql } from '@vercel/postgres';

async function main() {
  await sql`
    CREATE TABLE IF NOT EXISTS services (
      id SERIAL PRIMARY KEY,
      title VARCHAR(255) NOT NULL,
      description TEXT NOT NULL,
      icon VARCHAR(255) NOT NULL,
      "order" INTEGER NOT NULL
    );
  `;

  await sql`
    CREATE TABLE IF NOT EXISTS authors (
      id SERIAL PRIMARY KEY,
      name VARCHAR(255) NOT NULL,
      bio TEXT NOT NULL,
      profile_picture VARCHAR(255) NOT NULL
    );
  `;
}

main().catch((err) => {
  console.error(
    'An error occurred while attempting to seed the database:',
    err,
  );
});
