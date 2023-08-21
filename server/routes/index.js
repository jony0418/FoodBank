const router = require('express').Router();
const distributiRonoutes = require('./distribution');
const inventorytRoutes = require('./inventory');

router.use('/distribution', distributiRonoutes);
router.use('/inventory', inventorytRoutes);

module.exports = router;