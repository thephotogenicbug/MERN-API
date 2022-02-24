const mongoose = require("mongoose");
const validator = require("validator");
const productSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please Enter Product Name"],
    trim: true,
  },
  description: {
    type: String,
    required: [true, "Please Enter Product Description"],
  },
  price: {
    type: Number,
    required: [true, "Please Enter Product Price"],
  },
  images: {
    type: String,
    required: [true, "Please Add Product Image"],
  },
  category: {
    type: String,
    required: [true, "Please Enter Category Name"],
  },
  stock: {
    type: String,
    required: [true, "Please Enter Product Stock Details"],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Product", productSchema);
