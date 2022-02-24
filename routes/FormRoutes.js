const express = require("express");
const { newForm, getForm } = require("../controllers/FormController");
const router = express.Router();

router.route("/postcity").post(newForm);
router.route("/getcity").get(getForm);

module.exports = router;
