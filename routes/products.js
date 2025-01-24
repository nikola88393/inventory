const { Router } = require("express");
const router = Router();

router.get("/", (req, res) => {
  res.send("Products page");
});

router.get("/new", (req, res) => {
  res.send("Product form");
});

router.post("/new", (req, res) => {
  res.send("Post new product");
});

module.exports = router;
