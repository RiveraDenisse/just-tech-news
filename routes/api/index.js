//this file will serve as a means to collect all of the API routes and package them up for use.
const router = require('express').Router();

const userRoutes = require('./user-routes.js');

router.use('/users', userRoutes);

module.exports = router;