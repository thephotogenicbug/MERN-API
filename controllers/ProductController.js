const Product = require("../models/ProductModel");
const ErrorHandler = require("../utils/errorHandler");
const catchAsyncErrors = require("../middlewares/catchAsyncErrors");

// Post Product
exports.newProduct = catchAsyncErrors(async (req, res, next) => {
  const { name, description, price, images, category, stock } = req.body;

  const product = await Product.create({
    name,
    description,
    price,
    images,
    category,
    stock,
  });
  res.status(201).json({
    success: true,
    product,
  });
});

// Get Product
exports.getProducts = catchAsyncErrors(async (req, res, next) => {
    const products = await Product.find()

    res.status(200).json({
        success:true,
        products,
    })
});
