const mongoose = require('mongoose');

const donationSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    amount: {
        type: Number,
        required: true,
    },
    date: {
        type: Date,
        default: Date.now,
        required: true
    },
    paymentMethod: { // Método de Pago, e.g., "03 - Transferencia electrónica de fondos"
        type: String,
        required: true,
    },
    paymentConditions: { // Condiciones de pago, e.g., "Pago en una sola exhibición"
        type: String,
        default: "Pago en una sola exhibición"
    },
    folio: { // Unique invoice number
        type: String,
        required: true,
        unique: true
    },
    currency: { // Moneda, e.g., "MXN"
        type: String,
        default: "MXN"
    },
    exchangeRate: { // Tipo de cambio (only if donation was in a different currency)
        type: Number,
        default: 1
    },
    taxRegime: { // Régimen fiscal of the ONG, e.g., "601 - General de Ley Personas Morales"
        type: String,
        required: true
    },
    confirmationCode: String, // Código de confirmación (in special scenarios)
    CFDIUse: { // Uso del CFDI, e.g., "G03 - Gastos en general"
        type: String,
        required: true
    },
    taxDetails: {
        VAT: Number, // IVA
        ISR: Number, // ISR if applicable
        // ... any other tax details you'd like to capture.
    }
});

module.exports = mongoose.model('Donation', donationSchema);
