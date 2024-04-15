const router = require('express').Router()

router.use('/usuarios', require('./api/usuarios.js'))

module.exports = router