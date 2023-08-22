const connection = require('../config/connection');
const { Product, Transaction } = require('../models');
const { restoreTransaction } = require('../controllers/transactionController')

connection.on('error', (err) => err);

const mockProducts = [

    { name: 'Product A', description: 'Description for Product A', quantity: 0 },
    { name: 'Product B', description: 'Description for Product B', quantity: 0 },
    { name: 'Product C', description: 'Description for Product C', quantity: 0 },
    { name: 'Product D', description: 'Description for Product D', quantity: 0 },
    { name: 'Product E', description: 'Description for Product E', quantity: 0 },
];
const mockTransactions = [
    {
        purpose: 'Receive',
        unit: 1,
        batchSize: 'Small',
        operation: 'Receive'
    },
    {
        purpose: 'Distribute',
        unit: 3,
        batchSize: 'Large',
        operation: 'Distribute'
    },

    {
        purpose: 'Distribute',
        unit: 3,
        batchSize: 'Large',
        operation: 'Distribute'
    },

];

const buildInventory = (product, quantity) => ({ ...product, quantity })
const buildTransaction = (baseTransaction, product) => ({ ...baseTransaction, product })

connection.once('open', async () => {
    console.log('connected');
    try {
        await Product.deleteMany();
        await Transaction.deleteMany();

        const createdProducts = await Product.create(mockProducts);

        const batch1 = [
            buildInventory(createdProducts[0], 100),
            buildInventory(createdProducts[1], 100),
            buildInventory(createdProducts[2], 100),
            buildInventory(createdProducts[3], 100),
            buildInventory(createdProducts[4], 100)
        ];
        const batch2 = [
            buildInventory(createdProducts[0], 4),
            buildInventory(createdProducts[3], 12)
        ];
        const batch3 = [
            buildInventory(createdProducts[1], 4),
            buildInventory(createdProducts[2], 8),
            buildInventory(createdProducts[4], 12)
        ];

        const transactions = await Transaction.create([
            buildTransaction(mockTransactions[0], batch1),
            buildTransaction(mockTransactions[1], batch2),
            buildTransaction(mockTransactions[2], batch3)
        ]);
        
        console.log(createdProducts);
        
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
