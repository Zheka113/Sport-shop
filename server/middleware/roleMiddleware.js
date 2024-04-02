const jwt = require('jsonwebtoken')
require('dotenv').config()
const ApiError = require("../error/ApiError")

module.exports = function (role) {
    return function (req, res, next){
    if (req.method === "OPTIONS") {
        next()
    }
    try {
        const token = req.headers.authorization.split(' ')[1]
        if (!token) {
            return next(ApiError.forbidden("Пользователь не авторизован"))
        }
        const decoded = jwt.verify(token, process.env.SECRET_KEY)
        //req.user = decoded
        if (decoded.role != role){
            return next(ApiError.forbidden("Доступ запрещён"))
        }
        next()
    } catch (e) {
        console.log(e)
        res.status(401).json({message: "Доступ запрещён"})
    }
    }
};