const mongoose = require('mongoose');

const distributionSchema = new mongoose.Schema({
    product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product',
        required: true
    },
    quantityDistributed: {
        type: Number,
        required: true,
    },
    recipientName: {
        type: String,
        required: true,
    },
    community: {
        type: String,
        required: true,
    },
    distributionDate: {
        type: Date,
        default: Date.now,
        required: true,
    }
});

module.exports = mongoose.model('Distribution', distributionSchema);
