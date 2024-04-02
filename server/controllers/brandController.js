const ApiError = require("../error/ApiError");
const Brand = require("../models/brand");
const { validationResult } = require('express-validator')

class BrandController{
    async create(req, res, next){
        try{
            const errors = validationResult(req)
            if (!errors.isEmpty()) {
                return res.status(400).json({message: "Ошибка при создании", errors})
            }
            const {value} = req.body;
            const newBrand = await Brand.findOne({value})
            if (newBrand) {
                return res.status(400).json({message: "Бренд с таким названием уже существует"})
            }
            const brand = new Brand({value})
            await brand.save()
            return res.json({message: "Бренд успешно создан"})
        }catch(e){
            next(ApiError.badRequest(e.message))
        }
    }
    async getAll(req, res, next){
        try {
            const brands = await Brand.find()
            res.json(brands)
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }
}

module.exports = new BrandController();