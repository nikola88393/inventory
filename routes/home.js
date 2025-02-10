const { Router } = require("express");
const router = Router();
const productsController = require("../controllers/productsController");

router.get("/", productsController.getAll);

router.post("/", productsController.getProductCategory);

module.exports = router;
