const { checkToken } = require('../helpers/middlewares.js');

const router = require('express').Router()

router.use('/usuarios', require('./api/usuarios.js'));
router.use('/profesores', checkToken, require('./api/profesores.js'))
router.use('/cursos', require('./api/cursos.js'))
router.use('/lecciones', require('./api/lecciones.js'))
router.use('/alumnos', checkToken, require('./api/alumnos.js'));
router.use('/preguntas', require('./api/preguntas.js'));

module.exports = router