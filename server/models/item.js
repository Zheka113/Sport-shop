const {Schema, model} = require('mongoose')
const Type = require('./type')
const Brand = require('./brand')

const itemSchema = new Schema({
    name:{
        type: String,
        required: true
    },
    typeID:{
        type: String,
        required: true,
        ref: Type
    },
    brandID:{
        type: String,
        required: true,
        ref: Brand
    },
    info:{
        type: Array
    },
    description:{
        type: String,
        default: "No more information"
    }
})

module.exports = model('Item', itemSchema);