import pg from "pg";

export const db = new pg.Pool({
  connectionString: process.env.DATABASE_URL,
});

/* const { Pool } = require("pg");

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    require: true, // Enforce SSL connection
    rejectUnauthorized: false,
  },
});

module.exports = pool;
*/
