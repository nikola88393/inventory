const queries = require("../db/queries");
const pool = require("../db/pool");
const { response } = require("express");

module.exports = {
  getAll: async (req, res) => {
    const query = "SELECT * FROM categories;";
    try {
      const { rows } = await pool.query(query);

      if (!rows) {
        res.status(404).send("Categories not found");
      }
      console.log(rows);
      res.render("../views/home", { data: rows });
    } catch (err) {
      console.log(err);
      res.status(500).send("Internal server error");
    }
  },

  setCategory: async (req, res) => {
    const { name } = req.body;
    const query = "INSERT INTO categories (name) VALUES ($1);";

    try {
      await pool.query(query, [name]);

      res.redirect("/");
    } catch (err) {
      console.log(err);
      res.status(500).send("Internal server error");
    }
  },

  deleteCategory: async (req, res) => {
    const { id } = req.params;
    const query = "DELETE FROM categories WHERE id = $1;";
    try {
      await pool.query(query, [id]);

      res.send("Category deleted");
    } catch (err) {
      console.log(err);
      res.status(500).send("internal server error");
    }
  },
};
