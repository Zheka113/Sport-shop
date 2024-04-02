const Router = require('express')
const router = new Router()
const authController = require('../controllers/authController')
const {check} = require("express-validator")
const authMiddleware = require('../middleware/authMiddleware')
const roleMiddleware = require('../middleware/roleMiddleware')

router.post('/registration', [
    check('email', "имя пользователя не может быть пустым").notEmpty(),
    check('password', "пароль должен быть больше 4 и меньше 10 символов").isLength({min:4, max:10})
], authController.registration)
router.post('/login', authController.login)
router.get('/', roleMiddleware("ADMIN"), authController.getAll)

module.exports = router;