const Form = require('../models/FormModel')
const ErrorHandler = require("../utils/errorHandler");
const catchAsyncErrors = require("../middlewares/catchAsyncErrors");

// Post Product
exports.newForm = catchAsyncErrors(async (req, res, next) => {
  const { name, email, mobile, message } = req.body;

  const form = await Form.create({
    name,
    email,
    mobile,
    message
  });
  res.status(201).json({
    success: true,
    form,
  });
});

// Get Product
exports.getForm = catchAsyncErrors(async (req, res, next) => {
  const forms = await Form.find();

  res.status(200).json({
    success: true,
    forms,
  });
});
