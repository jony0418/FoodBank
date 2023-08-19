const { Product, Transaction } = require('../models');
const { subtractProductQuantity, addProductQuantity } = require('./productController');

module.exports = {
    async getAllTransaction(req, res) {
        try {
            const transaction = await Transaction.find();
            res.json(transaction);
        } catch (err) {
            res.status(500).json(err);
        }
    },
    async getTransaction(req, res) {
        try {
            const transaction = await Transaction.findOne({ _id: req.params.transactionId });
            if (!transaction) {
                return res.status(404).json({ message: 'No transactions with that ID' });
            }
            res.json(transaction);
        } catch (err) {
            res.status(500).json(err);
        }
    },

    async modifyTransaction(req, res) {
        try {
            const transaction = await Transaction.findOneAndUpdate(
                { _id: req.params.transactionId },
                { $set: req.body },
                { runValidators: true, new: true }
            );

            if (!transaction) {
                res.status(404).json({ message: 'No transaction with this id!' });
            }

            await this.restoreTransaction();

            res.json(transaction);
        } catch (err) {
            res.status(500).json(err);
        }
    }, async addTransaction(req, res, operation) {
        try {
            const newTransaction = req.body;
            newTransaction.operation = operation;
            const transaction = await Transaction.create(newTransaction);

            await this.restoreTransaction();

            res.json(transaction);
        } catch (err) {
            res.status(500).json(err);
        }
    },
    async restoreTransaction() {
        try {
            const transactions = await Transaction.find().populate('product');

            for (const transaction of transactions) {
                for (const product of transaction.product) {
                    const existingProduct = await Product.findById(product._id);

                    if (!existingProduct) {
                        console.warn(`Product with ID ${product._id} not found.`);
                        continue;
                    }

                    if (transaction.operation === 'Receive') {
                        addProductQuantity(existingProduct._id, product.quantity);
                    } else if (transaction.operation === 'Distribute') {
                        subtractProductQuantity(existingProduct._id, product.quantity);
                    }

                    await existingProduct.save();
                }
            }

            console.log('Product quantities updated successfully.');
        } catch (error) {
            console.error('Error updating product quantities:', error);
        }
    },
};
