const { Router } = require("express");
const router = Router();

router.get("/", (req, res) => {
  res.send("Category page");
});

router.get("/new", (req, res) => {
  res.send("Category form");
});

router.post("/new", (req, res) => {
  res.send("Post new category");
});

module.exports = router;
