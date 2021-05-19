const router = require('express').Router();
const userRoutes = require('./userRoutes');
const myDashboard = require('./myDashboard');

router.use('/users', userRoutes);
router.use('/myDashboard', myDashboard);

module.exports = router;
