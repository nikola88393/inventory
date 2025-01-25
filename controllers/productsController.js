const {
  getAllProducts,
  getProductByCategory,
  getProductById,
  createProduct,
  deleteProduct,
} = require("../db/queries");

module.exports = {
  getAll: async (req, res) => {
    try {
      const products = await getAllProducts();

      if (!products) {
        res.status(404).send("No products found");
      }

      res.json(products);
    } catch (err) {
      console.log(err);
      res.status(500).send("Internal server error");
    }
  },

  getProduct: async (req, res) => {
    const { productId } = req.params;

    try {
      const product = await getProductById(productId);

      if (!product) {
        res.status(404).send("No product found");
      }

      res.json(product);
    } catch (err) {
      console.log(err);
      res.status(500).send("Internal server error");
    }
  },

  getProductCategory: async (req, res) => {
    const { categoryId } = req.params;

    try {
      const product = await getProductByCategory(categoryId);

      if (!product) {
        res.status(404).send("No product found");
      }

      res.json(product);
    } catch (err) {
      console.log(err);
      res.status(500).send("Internal server error");
    }
  },

  setProduct: async (req, res) => {
    const { name, price } = req.body;

    try {
      await createProduct(name, price);

      res.redirect("/");
    } catch (err) {
      console.log(err);
      res.status(500).send("Internal server error");
    }
  },

  deleteProduct: async (req, res) => {
    const { id } = req.params;

    try {
      await deleteProduct(id);

      res.send("Product deleted");
    } catch (err) {
      console.log(err);
      res.status(500).send("Internal server error");
    }
  },
};
