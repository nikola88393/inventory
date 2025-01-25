const { Router } = require("express");
const router = Router();
const controller = require("../controllers/productsController");

router.get("/", controller.getAll);

router.get("/new", (req, res) => {
  res.send("Product form");
});

router.post("/new", controller.setProduct);

module.exports = router;
