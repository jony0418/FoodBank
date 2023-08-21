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
    { name: 'Product F', description: 'Description for Product F', quantity: 40 },
    { name: 'Product G', description: 'Description for Product G', quantity: 50 },
    { name: 'Product H', description: 'Description for Product H', quantity: 60 },
    { name: 'Product I', description: 'Description for Product I', quantity: 35 },
    { name: 'Product J', description: 'Description for Product J', quantity: 45 },
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
    // Additional transactions
    {
        transaction_date: new Date(),
        purpose: 'Receive',
        batch: 'Batch 3',
        batchSize: 'Medium',
        operation: 'Receive'
    },
    {
        transaction_date: new Date(),
        purpose: 'Distribute',
        batch: 'Batch 4',
        batchSize: 'Small',
        operation: 'Distribute'
    },
    // Add more transactions as needed
];

/**
 * 
 * @param {*} product -test2 jsdoc
 * @param {*} quantity 
 * @returns 
 */
const buildInventory = (product, quantity) => ({...product, quantity})
const buildTransaction = (baseTransaction, product) => ({...baseTransaction, product})
connection.once('open', async () => {
    console.log('connected');
    try {
        await Product.deleteMany();
        await Transaction.deleteMany();

        const createdProducts = await Product.create(mockProducts);

        const batch1 = [
            buildInventory (createdProducts[1], 6),
            buildInventory (createdProducts[2], 4),
            buildInventory (createdProducts[4], 12)
        ];
        const batch2 = [
            buildInventory (createdProducts[0], 4),
            buildInventory (createdProducts[3], 12)
        ];

        const transactions = await Transaction.create([
            buildTransaction (mockTransactions[0], batch1),
            buildTransaction (mockTransactions[1], batch2)
        ]);
        console.log('mock1');
        console.log(transactions[0].product);
        console.log('mock2');
        console.log(transactions[1].product);
        await restoreTransaction();// -4 6 -4 12 12

        console.log('Database seeded with mock data.');
    } catch (error) {
        console.error('Error seeding database:', error);
    } finally {
        // Close the connection
        process.exit(0);
    }
});
