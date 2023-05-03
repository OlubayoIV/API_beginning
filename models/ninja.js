const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//creating a new schema
const NinjaSchema = new Schema({
    name: {
        type: String,
        required: [true, 'Name field is required']
    },
    rank: {
        type: String,
    },
    available: {
        type: Boolean,
        default: false
    }

//add geo location
})

const Ninja = mongoose.model('ninja', NinjaSchema);

module.exports = Ninja;