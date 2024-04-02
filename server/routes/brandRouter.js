const Router = require('express')
const router = new Router()
const brandController = require('../controllers/brandController')
const {check} = require("express-validator")

router.post('/', [
    check('value', "Название бренда не может быть пустым").notEmpty(),
], brandController.create)
router.get('/', brandController.getAll)

module.exports = router;