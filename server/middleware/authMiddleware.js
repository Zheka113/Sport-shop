const jwt = require('jsonwebtoken')
require('dotenv').config()
const ApiError = require("../error/ApiError")

module.exports = function (req, res, next) {
    if (req.method === "OPTIONS") {
        next()
    }
    try {
        const token = req.headers.authorization.split(' ')[1]
        if (!token) {
            return next(ApiError.forbidden("Пользователь не авторизован"))
        }
        const decoded = jwt.verify(token, process.env.SECRET_KEY)
        req.user = decoded
        console.log(req.user.role)
        next()
    } catch (e) {
        res.status(401).json({message: "Пользователь не авторизован"})
    }
};