const router = require('express').Router();
const companyRoutes = require('./company-routes');

router.use('/companies', companyRoutes);

module.exports = router;
