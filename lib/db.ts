import { sql } from '@vercel/postgres';

export const db = {
  query: (query: TemplateStringsArray, ...values: (string | number)[]) => sql(query, ...values),
};
