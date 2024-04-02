const ApiError = require("../error/ApiError");
const Type = require("../models/type");
const { validationResult } = require('express-validator')

class TypeController{
    async create(req, res, next){
        try{
            const errors = validationResult(req)
            if (!errors.isEmpty()) {
                return res.status(400).json({message: "Ошибка при создании", errors})
            }
            const {value} = req.body;
            const newType = await Type.findOne({value})
            if (newType) {
                return res.status(400).json({message: "Такой тип уже существует"})
            }
            const type = new Type({value})
            await type.save()
            return res.json({message: "Тип успешно создан"})
        }catch(e){
            next(ApiError.badRequest(e.message))
        }
    }
    async getAll(req, res, next){
        try {
            const types = await Type.find()
            res.json(types)
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }
}

module.exports = new TypeController();