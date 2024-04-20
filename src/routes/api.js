const { checkToken } = require('../helpers/middlewares.js');

const router = require('express').Router()

router.use('/usuarios', require('./api/usuarios.js'));
router.use('/profesores', require('./api/profesores.js'))
router.use('/cursos', require('./api/cursos.js'))
router.use('/lecciones', checkToken, require('./api/lecciones.js'))
router.use('/alumnos', require('./api/alumnos.js'));
router.use('/preguntas', checkToken, require('./api/preguntas.js'));
router.use('/alumnoscursos', checkToken, require('./api/alumnos-cursos.js'))

module.exports = router