const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        unique: true,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    role: {
        type: String,
        enum: ['user', 'admin'],
        default: 'user'
    },
    RFC: {
        type: String,
        unique: true,
        required: true,
    },
    address: {
        street: {
            type: String,
            required: true,
        },
        exteriorNumber: String,
        interiorNumber: String,
        neighborhood: {
            type: String,
            required: true,
        },
        city: {
            type: String,
            required: true,
        },
        state: {
            type: String,
            required: true,
        },
        postalCode: {
            type: String,
            required: true,
        },
        country: {
            type: String,
            default: 'México'
        }
    },
    phoneNumber: String
});

module.exports = mongoose.model('User', userSchema);
