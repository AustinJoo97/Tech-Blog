const router = require('express').Router();
const userRoutes = require('./userRoutes');
const blogPosts = require('./blogPosts');

router.use('/users', userRoutes);
router.use('/blogPosts', blogPosts);

module.exports = router;
