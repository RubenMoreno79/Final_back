
const router = require('express').Router()

router.use('/proyectos', require('./api/proyectos.js'));



module.exports = router