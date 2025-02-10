const { Router } = require("express");
const router = Router();
const controller = require("../controllers/categoryController");

router.get("/", controller.getAll);

router.get("/new", (req, res) => {
  res.render("./categoryForm");
});

router.get("/edit/:id", controller.renderEdit);

router.post("/edit/:id", controller.editCategory);

router.get("/delete/:id", controller.deleteCategory);

router.post("/new", controller.setCategory);

module.exports = router;
