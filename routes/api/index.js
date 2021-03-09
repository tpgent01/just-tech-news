const router = require('express').Router();
const userRoutes = require('./user-routes.js');

// take routes and implement them to another router instance, prefixing them with the path /users
router.use('/users', userRoutes);

module.exports = router;