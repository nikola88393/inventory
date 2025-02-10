const { Pool } = require("pg");
console.log("databsehost", process.env.DATABASE_HOST);
module.exports = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: { rejectUnauthorized: false },
});
