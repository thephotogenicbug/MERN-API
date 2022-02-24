const express = require('express')

const { newForm, getForm } = require('../controllers/FormController')
const routes = express.Router()

router.route('/post'),post(newForm)
router.route('/get').get(getForm)

module.exports = routes