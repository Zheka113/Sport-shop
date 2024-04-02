const ApiError = require("../error/ApiError");
const User = require("../models/user");
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { validationResult } = require('express-validator')
require('dotenv').config()

const generateAccessToken = (id, role) => {
    const payload = {
        id,
        role
    }
    const SECRET_KEY = process.env.SECRET_KEY;
    return jwt.sign(payload, SECRET_KEY, {expiresIn: "24h"} )
}

class UserController {
    async registration(req, res, next) {
        try {
            const errors = validationResult(req)
            if (!errors.isEmpty()) {
                return next(ApiError.badRequest(`Ошибка при регистрации: ${validationResult(req).errors[0].msg}`))
            }
            const {email, password, role} = req.body;
            const candidate = await User.findOne({email})
            if (candidate) {
                return next(ApiError.badRequest("Пользователь с таким именем уже существует"))
            }
            const hashPassword = bcrypt.hashSync(password, 7);
            const user = new User({email, password: hashPassword, role})
            await user.save()
            return res.json({message: "Пользователь успешно зарегистрирован"})
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }
    async login(req, res, next) {
        try {
            const {email, password} = req.body
            const user = await User.findOne({email})
            if (!user) {
                return next(ApiError.badRequest(`Пользователь ${email} не найден`))
            }
            const validPassword = bcrypt.compareSync(password, user.password)
            if (!validPassword) {
                return next(ApiError.badRequest(`Введен неверный пароль`))
            }
            const token = generateAccessToken(user._id, user.role)
            return res.json({token})
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }
    async getAll(req, res, next) {
        try {
            const users = await User.find()
            res.json(users)
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }
}

module.exports = new UserController();