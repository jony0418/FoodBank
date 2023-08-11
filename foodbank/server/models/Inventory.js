const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    description: String,
    type: { // e.g., Grain, Meat, Vegetable, Dairy, etc.
        type: String,
        required: true,
    },
    category: { // e.g., Organic, Non-organic, Canned, Fresh, etc.
        type: String,
        required: true,
    },
    family: { // e.g., Rice might belong to the "Grains" family.
        type: String,
        required: true,
    },
    quantity: {
        type: Number,
        required: true,
    },
    unitOfMeasure: { // e.g., kg, liter, piece, etc.
        type: String,
        required: true,
    },
    dateAdded: {
        type: Date,
        default: Date.now,
        required: true,
    },
    criticalDistributionDate: { // Date by which the food should be distributed for safety/consumption
        type: Date,
        required: true,
    },
    storageRecommendations: String, // e.g., "Keep in a cool, dry place."
    allergenInformation: String,
    nutritionalInformation: {
        calories: Number,
        protein: Number,
        carbohydrates: Number,
        fat: Number,
        fiber: Number,
        sugars: Number,
        sodium: Number,
        // ... any other nutritional details you'd like to capture.
    },
    origin: String, // Where the food item comes from, e.g., "Mexico"
    brand: String
});

module.exports = mongoose.model('Product', productSchema);
