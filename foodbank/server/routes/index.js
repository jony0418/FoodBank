const router = require('express').Router();
const distributiRonoutes = require('./distribution');
const donationsRoutes = require('./donations');
const inventorytRoutes = require('./inventory');

router.use('/distribution', distributiRonoutes);
router.use('/donations', donationsRoutes);
router.use('/inventory', inventorytRoutes);

module.exports = router;
