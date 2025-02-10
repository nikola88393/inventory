const pool = require("../db/pool");
const {
  deleteCategory,
  getAllCategories,
  createCategory,
  getCategoryById,
  updateCategory,
} = require("../db/queries");
module.exports = {
  getAll: async (req, res) => {
    try {
      const rows = await getAllCategories();

      if (!rows) {
        res.status(404).send("Categories not found");
      }

      console.log(rows);
      res.render("../views/productForm", { categories: rows });
    } catch (err) {
      console.log(err);
      res.status(500).send("Internal server error");
    }
  },

  setCategory: async (req, res) => {
    const { name } = req.body;
    try {
      await createCategory(name);

      res.redirect("/");
    } catch (err) {
      console.log(err);
      res.status(500).send("Internal server error");
    }
  },

  renderEdit: async (req, res, next) => {
    const { id } = req.params;

    try {
      const category = await getCategoryById(id);

      res.render("../views/categoryEdit", { category: category[0] });
    } catch (err) {
      console.log(err);
      next(err);
    }
  },

  editCategory: async (req, res, next) => {
    const { name } = req.body;
    const { id } = req.params;

    try {
      await updateCategory(name, id);

      res.redirect("/");
    } catch (err) {
      console.log(err);
      next(err);
    }
  },

  deleteCategory: async (req, res, next) => {
    const { id } = req.params;
    try {
      await deleteCategory(id);

      res.redirect("/");
    } catch (err) {
      next(err);
      console.log(err);
      // res.status(500).send("internal server error");
    }
  },
};
