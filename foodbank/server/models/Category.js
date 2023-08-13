const mongoose = require('mongoose'); 

const { Schema } = mongoose; 

const categorySchema = new Schema({
    name: {
        type: String,
        required: true,
        enum: ['fruits', 'seeds', 'vegetables', 'canned food', 'other']
    }
}); 

const Category = mongoose.model('Category', categorySchema); 

module.exports = Category; 