const router = require('express').Router();
const thoughtsRoutes = require('./thoughts');
const UserRoutes = require('./users');

router.use('/thoughts', thoughtsRoutes);
router.use('/User', UserRoutes);

module.exports = router;
