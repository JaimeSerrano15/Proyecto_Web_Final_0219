const mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var UserSchema = Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    tyype: String,
    email:{
        type: String,
        required: true
    }
});

module.exports = mongoose.model("user", UserSchema);