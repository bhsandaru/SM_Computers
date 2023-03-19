const mongoose = require ('mongoose');

const Schema = mongoose.Schema;

const AddUserSchema = new Schema({
    UserName: {
        type : String,
        required: true
    },
    UserPassword: {
        type: String,
        required: true
    }

})

module.exports = mongoose.model('User',AddUserSchema)
