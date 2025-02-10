const {
  getAllProducts,
  getProductByCategory,
  getProductById,
  createProduct,
  deleteProduct,
  getAllCategories,
  editProduct,
} = require("../db/queries");

module.exports = {
  getAll: async (req, res) => {
    try {
      const products = await getAllProducts();
      const categories = await getAllCategories();

      res.render("../views/home", {
        products: products,
        categories: categories,
      });
    } catch (err) {
      console.log(err);
      res.status(500).send("Internal server error");
    }
  },

  getProduct: async (req, res) => {
    const { productId } = req.params;

    try {
      const product = await getProductById(productId);

      res.json(product);
    } catch (err) {
      console.log(err);
      res.status(500).send("Internal server error");
    }
  },

  getProductCategory: async (req, res) => {
    const { filter } = req.body;

    try {
      if (filter == "null") {
        const products = await getAllProducts();
        const categories = await getAllCategories();

        res.render("../views/home", {
          products: products,
          categories: categories,
        });
      } else {
        const products = await getProductByCategory(filter);
        const categories = await getAllCategories();

        res.render("../views/home", {
          products: products,
          categories: categories,
        });
      }
    } catch (err) {
      console.log(err);
      res.status(500).send("Internal server error");
    }
  },
  renderEdit: async (req, res, next) => {
    const { productId } = req.params;

    try {
      const product = await getProductById(productId);
      const categories = await getAllCategories();
      console.log(product, categories);

      res.render("../views/productEditView", {
        product: product[0],
        categories,
      });
    } catch (err) {
      next(err);
    }
  },
  setProduct: async (req, res) => {
    const { name, price, categoryId } = req.body;

    try {
      await createProduct(name, price, categoryId);

      res.redirect("/");
    } catch (err) {
      console.log(err);
      res.status(500).send("Internal server error");
    }
  },

  editProduct: async (req, res, next) => {
    const { name, price, categoryId } = req.body;
    const { productId } = req.params;

    console.log(name, price, categoryId, productId);

    try {
      await editProduct(name, price, categoryId, productId);

      res.redirect("/");
    } catch (err) {
      console.log(err);
      next(err);
    }
  },

  deleteProduct: async (req, res) => {
    const { productId } = req.params;

    try {
      await deleteProduct(productId);

      res.redirect("/");
    } catch (err) {
      console.log(err);
      res.status(500).send("Internal server error");
    }
  },
};
