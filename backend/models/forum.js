const moongose = require('mongoose'),
    Schema = moongose.Schema;

var ForumSchema = Schema({
    name: {
        type: String,
        unique: true,
        required: true
    },
    numMembers: Number,
    numPosts: Number,
    create_date: {
        type: Date,
        default: Date.now
    }
});

module.exports = moongose.model("forum", ForumSchema);