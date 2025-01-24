const express = require("express");
const app = express();
const home = require("./routes/home");
const categories = require("./routes/categories");
const products = require("./routes/products");

app.use("/", home);
app.use("/categories", categories);
app.use("/products", products);

app.listen(8000);
