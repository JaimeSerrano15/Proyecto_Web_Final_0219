const moongose = require('mongoose'),
    Schema = moongose.Schema;

var PostSchema = Schema({
    title: {
        type: String,
        required: true
    },

    autor: {
        type: Schema.Types.ObjectId,
        ref: "user",
        required: true
    },

    content: {
        type: String,
        required: true
    }
});

module.exports = moongose.model("post", PostSchema);