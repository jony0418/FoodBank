const { Product } = require('../models');


module.exports = {
    async addProductQuantity(productId, quantity, unit) {
        try {
            const product = await Product.findById(productId);
            if (!product) {
                throw new Error('Product not found.');
            }
            (product.quantity) += quantity * unit;
            await product.save();
            //console.log('Product quantity added successfully.')
            return { message: 'Product quantity added successfully.' };
        } catch (err) {
            return { error: err.message || 'Error adding product quantity.' };
        }
    },
    async subtractProductQuantity(productId, quantity, unit) {
        try {
            const product = await Product.findById(productId);
            if (!product) {
                throw new Error('Product not found.');
            }
            (product.quantity) -= quantity * unit;
            //console.log('Product quantity subtracted successfully.')
            await product.save();
            return { message: 'Product quantity subtracted successfully.' };
        } catch (err) {
            return { error: err.message || 'Error subtracting product quantity.' };
        }
    },
};