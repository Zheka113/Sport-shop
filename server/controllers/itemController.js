const uuid = require('uuid')
const path = require('path')
const Item = require('../models/item')
const ApiError = require('../error/ApiError')
const Type = require('../models/type')
const Brand = require('../models/brand')
const Info = require('../models/info')

class ItemController {
    async create(req, res, next) {
        try {
            const { name, typeID, brandID, info, description } = req.body;
            //const { img } = req.files;
            //let fileName = uuid.v4() + ".jpg";
            //img.mv(path.resolve(__dirname, '..', 'static', fileName));


            if (info) {
                JSON.parse(JSON.stringify(info))
                info.forEach(i => {
                    Info.create({
                        title: i.title,
                        description: i.description
                    })
                }
                )
            }
            console.log(info)
            const item = await Item.create({ name, typeID, brandID, info, description });
            return res.json(item);
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }
    async getAll(req, res, next) {
        try {
            const { typeID, brandID, lim, page } = req.query;
            let offset = page * lim - lim;
            let items;
            if (!typeID && !brandID) {
                items = await Item.find().skip(offset).limit(lim || 9)
            }
            if (typeID && !brandID) {
                items = await Item.find({ where: { typeID } }).skip(offset).limit(lim || 9)
            }
            if (!typeID && brandID) {
                items = await Item.find({ where: { brandID } }).skip(offset).limit(lim || 9)
            }
            if (typeID && brandID) {
                items = await Item.find({ where: { typeID, brandID } }).skip(offset).limit(lim || 9)
            }
            return res.json(items);
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }
    async getOne(req, res, next) {
        try {
            const { id } = req.params
            let item = await Item.findOne({ _id: id })
            return res.json(item)
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }
}

module.exports = new ItemController();