const { Router } = require("express");
const router = Router();
const controller = require("../controllers/productsController");
const categoriesController = require("../controllers/categoryController");

router.get("/new", categoriesController.getAll);

router.post("/new", controller.setProduct);

router.get("/edit/:productId", controller.renderEdit);

router.post("/edit/:productId", controller.editProduct);

router.get("/delete/:productId", controller.deleteProduct);

router.get("/:categoryId", controller.getAll);

module.exports = router;
