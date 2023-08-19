const { Product, Transaction } = require('../models');


module.exports = {
    async getAllProduct(req, res) {
        try {
            res.json({ 'd': 'd' });
        } catch (err) {
            res.status(500).json(err);
        }
    },
    async getProduct(req, res) {
        try {
            res.json({ 'd': 'd' });
        } catch (err) {
            res.status(500).json(err);
        }
    },
    async addProduct(req, res) {
        try {
            res.json({ 'd': 'd' });
        } catch (err) {
            res.status(500).json(err);
        }
    },
    async addProductQuantity(quantity, res) {
        try {
            const res = { 'd': 'd' };
        } catch (err) {
            const res = { 'error': 'd' };
        }
        return res;

    },
    async substractProductQuantity(quantity, res) {
        try {
            const res = { 'd': 'd' };
        } catch (err) {
            const res = { 'error': 'd' };
        }
        return res;
    },
    async modifyProduct(req, res) {
        try {
            res.json({ 'd': 'd' });
        } catch (err) {
            res.status(500).json(err);
        }
    },
    async deleteProduct(req, res) {
        try {
            res.json({ 'd': 'd' });
        } catch (err) {
            res.status(500).json(err);
        }
    },
};
