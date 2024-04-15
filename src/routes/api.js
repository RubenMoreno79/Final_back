const router = require('express').Router()

router.use('/usuarios', require('./api/usuarios.js'))
router.use('/cursos', require('./api/cursos.js'))

module.exports = router