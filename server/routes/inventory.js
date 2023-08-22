const router = require('express').Router();

const {
    getAllTransaction,
    getTransaction,
    modifyTransaction,
    addTransaction,
    restoreTransaction
} = require('../controllers/transactionController.js');

const buildTransaction = async (req, res) => {
    const operation = req.body.operation;
    req.operation = operation;
    await addTransaction(req, res, "Receive");
    await restoreTransaction();

}
const rebuildTransaction = async (req, res) => {
    await modifyTransaction(req, res);
    await restoreTransaction();

}
router.route('/')
    .get(getAllTransaction)
    .post(buildTransaction);

router
    .route('/:transactionId')
    .get(getTransaction)

router.route('/:transactionId')
    .put(rebuildTransaction);

module.exports = router;