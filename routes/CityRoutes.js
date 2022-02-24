const express = require("express");
const { newCity, getCity } = require("../controllers/CityController");
const router = express.Router();

router.route("/postcity").post(newCity);
router.route("/getcity").get(getCity);

module.exports = router;
