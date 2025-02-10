const pool = require("./pool");

//Product queries
const getAllProducts = async () => {
  const query = `
    SELECT 
      products.id AS id,
      products.name AS name,
      products.price,
      categories.id AS category_id,
      categories.name AS category_name
    FROM products
    LEFT JOIN categories ON products.category_id = categories.id;
  `;
  const { rows } = await pool.query(query);
  console.log(rows);

  return rows;
};

const getProductById = async (id) => {
  const query = `SELECT products.id AS id,
      products.name AS name,
      products.price,
      categories.id AS category_id,
      categories.name AS category_name
    FROM products
    LEFT JOIN categories ON products.category_id = categories.id WHERE products.id = $1;`;
  const { rows } = await pool.query(query, [id]);

  return rows;
};

const getProductByCategory = async (categoryId) => {
  const query = `SELECT products.id AS id,
  products.name AS name,
  products.price,
  categories.id AS category_id,
  categories.name AS category_name
FROM products
JOIN categories ON products.category_id = categories.id WHERE categories.id = $1;`;
  const { rows } = await pool.query(query, [categoryId]);
  console.log(rows);

  return rows;
};

const createProduct = async (name, price, categoryId) => {
  if (typeof categoryId === "string") {
    console.log("execute 1");
    const query = "INSERT INTO products(name, price) VALUES ($1, $2);";
    await pool.query(query, [name, price]);
  } else {
    console.log("execute 2");

    const query =
      "INSERT INTO products(name, price, category_id) VALUES ($1, $2, $3);";
    await pool.query(query, [name, price, categoryId]);
  }
};

const editProduct = async (name, price, categoryId, productId) => {
  console.log(name, price, categoryId, productId);
  try {
    if (categoryId) {
      const query =
        "UPDATE products SET name=$1, price=$2, category_id=$3 WHERE id=$4";
      await pool.query(query, [name, price, categoryId, productId]);
    } else {
      const query =
        "UPDATE products SET name=$1, price=$2, category_id=NULL WHERE id=$3";
      await pool.query(query, [name, price, productId]);
    }
  } catch (err) {
    console.error("Database error:", err);
  }
};

const deleteProduct = async (productId) => {
  const query = "DELETE FROM products WHERE id = $1;";
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

const updateCategory = async (name, id) => {
  const query = "UPDATE categories SET name=$1 WHERE id=$2";
  await pool.query(query, [name, id]);
};

const deleteCategory = async (id) => {
  const rows = await getProductByCategory(id);

  if (rows.length > 0) {
    const query = "UPDATE products SET category_id=NULL WHERE category_id=$1";
    await pool.query(query, [id]);
  }

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
  editProduct,
  updateCategory,
};
