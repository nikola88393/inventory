const { Pool } = require("pg");

module.exports = new Pool({
  host: process.env.DATABASE_HOST || "localhost",
  user: process.env.DATABASE_USER || "nikola",
  database: process.env.DATABASE_NAME || "inventory",
  password: process.env.DATABASE_PASSWORD || "asdasdasd",
  port: 5432,
});
