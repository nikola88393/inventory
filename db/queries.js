const pool = require("./pool");

//Product queries
const getAllProducts = async () => {
  const query = "SELECT * FROM products;";
  const { rows } = await pool.query(query);

  return rows;
};

const getProductById = async (id) => {
  const query = "SELECT * FROM products WHERE id = $1;";
  const { rows } = await pool.query(query, [id]);

  return rows;
};

const getProductByCategory = async (categoryId) => {
  const query = "SELECT * FROM products WHERE category = $1;";
  const { rows } = await pool.query(query, [categoryId]);

  return rows;
};

const createProduct = async (name, price, categoryId) => {
  const query =
    "INSERT INTO products(name, price, category_id) VALUES ($1, $2, $3);";
  await pool.query(query, [name, price, categoryId]);
};

const deleteProduct = async (productId) => {
  const query = "DELETE FROM prodcuts WHERE id = $1;";
  await pool.query(query, [productId]);
};
//Category queries
const getAllCategories = async () => {
  const query = "SELECT * FROM categories;";
  const { rows } = await pool.query(query);

  return rows;
};

const getCategoryById = async (id) => {
  const query = "SELECT * FROM categories WHERE id = $1;";
  const { rows } = await pool.query(query, [id]);

  return rows;
};

const createCategory = async (name) => {
  const query = "INSERT INTO categories(name) VALUES ($1);";
  await pool.query(query, [name]);
};

const deleteCategory = async (id) => {
  const query = "DELETE FROM categories WHERE id = $1";
  await pool.query(query, [id]);
};

module.exports = {
  getAllProducts,
  getProductById,
  getProductByCategory,
  createProduct,
  deleteProduct,
  getAllCategories,
  getCategoryById,
  createCategory,
  deleteCategory,
};
