const router = require('express').Router();
const companyRoutes = require('./company-routes');
const userRoutes = require('./user-routes');
const jobRoutes = require('./posting-routes');
const tagRoutes = require('./tag-routes');

router.use('/companies', companyRoutes);
router.use('/users', userRoutes);
router.use('/jobs', jobRoutes);
router.use('/tags', tagRoutes);

module.exports = router;
