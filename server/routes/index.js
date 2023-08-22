const router = require('express').Router();
const distributiRonoutes = require('./distribution');
const inventorytRoutes = require('./inventory');

router.use('/api/distribution', distributiRonoutes);
router.use('/api/inventory', inventorytRoutes);

module.exports = router;