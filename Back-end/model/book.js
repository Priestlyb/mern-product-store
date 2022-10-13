const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const bookSchema = new Schema({
    image: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true
    },
    author : {
        type: String,
        required: true
    },
    description  : {
        type: String,
        required: true
    },
    price : {
        type: Number,
        required: true
    },
    avaliable : {
        type: Boolean
    }
});

module.exports = mongoose.model("Book", bookSchema);

// books