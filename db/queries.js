const pool = require("./pool");

const getAllProducts = async () => {
  const query = "SELECT * FROM products";
  const { rows } = await pool.query(query);

  return rows;
};

const getProductById = async (id) => {
  const query = "SELECT * FROM products WHERE id = $1";
  const { rows } = await pool.query(query, [id]);

  return rows;
};

const getProductByCategory = async (categoryId) => {
  const query = "SELECT * FROM products WHERE category = $1";
  const { rows } = await pool.query(query, [categoryId]);

  return rows;
};

const getAllCategories = async () => {
  const query = "SELECT * FROM categories";
  const { rows } = await pool.query(query);

  return rows;
};

const getCategoryById = async (id) => {
  const query = "SELECT * FROM categories WHERE id = $1";
  const { rows } = await pool.query(query, [id]);

  return rows;
};

module.exports = {
  getAllProducts,
  getProductById,
  getProductByCategory,
  getAllCategories,
  getCategoryById,
};
