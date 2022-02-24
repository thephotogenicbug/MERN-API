const express = require("express");
const { newProduct, getProducts } = require("../controllers/ProductController");
const router = express.Router();

router.route("/newproduct").post(newProduct);
router.route("/getproducts").get(getProducts);

module.exports = router;
