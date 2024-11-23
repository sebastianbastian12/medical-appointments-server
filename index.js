const router = require('express').Router();

router.use('/api-docs', require('./swagger'));

router.use('/appointments', require('./appointments'));

module.exports = router;
