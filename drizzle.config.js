/** @type { import("drizzle-kit").Config } */
export default {
    schema: "./configs/schema.jsx",
    dialect: 'postgresql',
    dbCredentials: {
      url: 'postgresql://neondb_owner:npg_wZmfVqj7SFv6@ep-winter-cell-a46ua92q-pooler.us-east-1.aws.neon.tech/neondb?sslmode=require',
    }
  };