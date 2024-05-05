const {Schema, model} = require('mongoose');

const basketSchema = new Schema({
    itemsID:{
        type: Array
    },
    userID:{
        type: String,
        require: true
    }
})

module.exports = model('Basket', basketSchema);