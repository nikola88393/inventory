const { Pool } = require("pg");

module.exports = new Pool({
  host: "localhost",
  user: "nikola",
  database: "inventory",
  password: "Nikimiho2",
  port: 5432,
});
