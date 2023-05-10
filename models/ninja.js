const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//creating a geo schema
const GeoSchema = new Schema({
    type: {
        type : string,
        default: "Point"
    },
    coordinates: {
        type: [number],
        index: "2dsphere"
    }
});
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
    },
    geometry : GeoSchema

//add geo location
})

const Ninja = mongoose.model('ninja', NinjaSchema);

module.exports = Ninja;