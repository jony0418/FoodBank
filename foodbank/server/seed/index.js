const connection = require('../config/connection');
const { Product, Transaction } = require('../models');
const { restoreTransaction } = require('../controllers/transactionController')

connection.on('error', (err) => err);

const mockProducts = [
    { name: 'Product A', description: 'Description for Product A', quantity: 10 },
    { name: 'Product B', description: 'Description for Product B', quantity: 20 },
    { name: 'Product C', description: 'Description for Product C', quantity: 30 },
    { name: 'Product D', description: 'Description for Product D', quantity: 15 },
    { name: 'Product E', description: 'Description for Product E', quantity: 25 },
];
const mockTransactions = [
    {
        transaction_date: new Date(),
        purpose: 'Receive',
        batch: 'Batch 1',
        batchSize: 'Small',
        operation: 'Receive'
    },
    {
        transaction_date: new Date(),
        purpose: 'Distribute',
        batch: 'Batch 2',
        batchSize: 'Large',
        operation: 'Distribute'
    },
    // Add more transactions as needed
];

connection.once('open', async () => {
    console.log('connected');
    try {
        await Product.deleteMany();
        await Transaction.deleteMany();

        const createdProducts = await Product.create(mockProducts);
        console.log(createdProducts);
        const batch1 = [
            { ...createdProducts[1], quantity: 6 },
            { ...createdProducts[2], quantity: 4 },
            { ...createdProducts[4], quantity: 12 },
        ];
        const batch2 = [
            { ...createdProducts[0], quantity: 4 },
            { ...createdProducts[3], quantity: 12 },
        ];

        const transactions = await Transaction.create([
            { ...mockTransactions[0], product: batch1 },
            { ...mockTransactions[1], product: batch2 }
        ]);
        console.log(transactions);
        await restoreTransaction();
        
        console.log('Database seeded with mock data.');
    } catch (error) {
        console.error('Error seeding database:', error);
    } finally {
        // Close the connection
        process.exit(0);
    }
});
