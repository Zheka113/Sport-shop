const {Schema, model} = require('mongoose');

const brandSchema = new Schema({
    value:{
        type: String,
        unique: true
    }
})

module.exports = model('Brand', brandSchema);