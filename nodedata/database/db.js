let mongoose = require('mongoose');

let db = new mongoose.Schema({
    p_id:Number,
    p_name : String,
    p_description : String,
    p_cost: Number,
    p_img : String
},{
    collection:'records',
    versionKey: false
});
module.exports = mongoose.model('products',db);