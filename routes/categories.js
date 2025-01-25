const { Router } = require("express");
const router = Router();
const controller = require("../controllers/categoryController");

router.get("/", controller.getAll);

router.get("/new", (req, res) => {
  res.render("./categoryForm");
});

router.post("/new", controller.setCategory);

module.exports = router;
