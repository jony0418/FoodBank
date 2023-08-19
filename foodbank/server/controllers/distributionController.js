const { Product, Transaction } = require('../models');


module.exports = {
    async getAllTransaction(req, res) {
        try {
            res.json({ 'd': 'd' });
        } catch (err) {
            res.status(500).json(err);
        }
    }, 
    async getTransaction(req, res) {
        try {
            res.json({ 'd': 'd' });
        } catch (err) {
            res.status(500).json(err);
        }
    }, 
    async addTransactionDistribution(req, res) {
        try {
            res.json({ 'd': 'd' });
        } catch (err) {
            res.status(500).json(err);
        }
    }, 
    async modifyTransaction(req, res) {
        try {
            res.json({ 'd': 'd' });
        } catch (err) {
            res.status(500).json(err);
        }
    },
    async restoreTransaction(req, res) {
        try {
            res.json({ 'd': 'd' });
        } catch (err) {
            res.status(500).json(err);
        }
    },
};
