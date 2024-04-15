const router = require('express').Router();

router.use('/usuarios', require('../api/usuarios'));

module.exports = router;