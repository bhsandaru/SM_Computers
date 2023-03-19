

const mongoose = require ('mongoose');

const Schema = mongoose.Schema;

const AddItemSchema = new Schema({
    ItemCode: {
        type : String,
        required: true
    },
    ItemType: {
        type: String,
        required: true
    },
    ItemName: {
        type : String,
        required : true
    },

    ItemPrice: {
        type : Number,
        required : true
    },
    Availability:{
        type : String,
        required: true
    },

    ItemImage:{
        type : String,
        required: true
    }

})

module.exports = mongoose.model('Item',AddItemSchema)
