const Router = require('express')
const router = new Router()
const typeController = require('../controllers/typeController')
const {check} = require("express-validator")

router.post('/', [
    check('value', "Название типа не может быть пустым").notEmpty(),
], typeController.create)
router.get('/', typeController.getAll)

module.exports = router;
