const express = require("express");
const app = express();
const home = require("./routes/home");
const categories = require("./routes/categories");
const products = require("./routes/products");
const path = require("node:path");

app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use("/", home);
app.use("/categories", categories);
app.use("/products", products);

app.listen(8000);
