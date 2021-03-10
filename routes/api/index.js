const router = require('express').Router();

const userRoutes = require('./user-routes');
const postRoutes = require('./post-routes');

// take routes and implement them to another router instance, prefixing them with the path /users
router.use('/users', userRoutes);
router.use('/posts', postRoutes);

module.exports = router;