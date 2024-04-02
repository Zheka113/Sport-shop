const {Schema, model} = require('mongoose');

const typeSchema = new Schema({
    value:{
        type: String,
        unique: true
    }
})

module.exports = model('Type', typeSchema);