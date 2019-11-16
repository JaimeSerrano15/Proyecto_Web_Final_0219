const moongose = require('mongoose'),
    Schema = moongose.Schema;

var DeckSchema = Schema({
    name: String,
    numCards: Number
});

module.exports = moongose.model("deck", DeckSchema);