const City = require('../models/CityModel');
const catchAsyncErrors = require('../middlewares/catchAsyncErrors');

// Post
exports.newCity = catchAsyncErrors(async (req, res, next) => {
  const { name } = req.body;

  const city = await City.create({
    name,
  });
  res.status(201).json({
    success: true,
    city,
  });
});

// Get
exports.getCity = catchAsyncErrors(async (req, res, next) => {
  const cities = await City.find();

  res.status(200).json({
    success: true,
    cities,
  });
});
