const {Schema, model} = require('mongoose');
const Item = require('./item')

const infoSchema = new Schema({
    itemID:{
        type: String,
        ref: Item
    },
    title:{
        type: String
    },
    description:{
        type: String
    }
})

module.exports = model('Info', infoSchema);