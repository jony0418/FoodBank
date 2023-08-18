const mongoose = require('mongoose');
const Product = require('./Product');

const { Schema } = mongoose;

const transactionSchema = new Schema({
    product:
        [Product]
    ,
    transaction_date: {
        type: Date,
        required: true
    },
    purpose: {
        type: String,
        required: true
    },
    batch:{
        type: String,
        required: true
    }
}, { timestamps: true });

const Transaction = mongoose.model('Transaction', transactionSchema);

module.exports = Transaction;

