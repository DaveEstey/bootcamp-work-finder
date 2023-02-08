const router = require('express').Router();
const companyRoutes = require('./company-routes');
const userRoutes = require('./user-routes');

router.use('/companies', companyRoutes);
router.use('/users', userRoutes);

module.exports = router;
