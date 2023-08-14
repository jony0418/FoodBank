const mongoose = require('mongoose'); 

const { Schema } = mongoose; 

const productSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String
    },
    image: {
        type: String
    },
    quantity: {
        type: Number,
        default: 0
    },
}, { timestamps: true }); 

const Product = mongoose.model('Product', productSchema); 

module.exports = Product;

