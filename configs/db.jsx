import { neon } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-http';

const sql = neon("postgresql://neondb_owner:npg_wZmfVqj7SFv6@ep-winter-cell-a46ua92q-pooler.us-east-1.aws.neon.tech/neondb?sslmode=require");
export const db = drizzle(sql);
