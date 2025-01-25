const { Router } = require("express");
const router = Router();
const categoriesController = require("../controllers/categoryController");

router.get("/", categoriesController.getAll);

module.exports = router;
