const mongoose = require('mongoose');
const Product = require('./Product');
const productSchema = require('./Product').schema;

const { Schema } = mongoose;

const transactionSchema = new Schema({
    product: [
        productSchema
    ],
    transaction_date: {
        type: Date,
        default: Date.now()
    },
    purpose: {
        type: String,
        required: true
    },
    unit: {
        type: Number,
        required: true,
        default: 1
    },
    batchSize: {
        type: String,
        required: true
    },
    operation: {
        type: String,
        enum: ['Receive', 'Distribute'],
        required: true
    }
}, { timestamps: true });

const Transaction = mongoose.model('Transaction', transactionSchema);

module.exports = Transaction;

