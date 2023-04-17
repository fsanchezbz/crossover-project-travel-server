import pkg from "pg";
const { Pool } = pkg;

const pool = new Pool({
  connectionString:
    "postgres://ikeeizeq:x4wEWgBEswZtLq6jnGaXkNSNFhaHQxTd@manny.db.elephantsql.com/ikeeizeq",
});

export default pool;
