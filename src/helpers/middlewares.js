const jwt = require('jsonwebtoken')

const Usuario = require('../models/usuarios.model')
const Profesor = require('../models/profesores.model')
const Alumno = require('../models/alumnos.model')

const checkToken = async (req, res, next) => {
    if (!req.headers.authorization) {
        return res.status(401).json({ fatal: 'Debes incluir el token de autenticación' })
    }
    const token = req.headers.authorization
    let obj
    try {
        obj = jwt.verify(token, process.env.SECRET_KEY)
    } catch (error) {
        return res.status(401).json({ fatal: 'El token es incorrecto' })
    }

    const [usuarios] = await Usuario.selectById(obj.id)
    req.user = usuarios[0]

    next()
}

const checkProfesor = async (req, res, next) => {
    if (req.user.rol === 'profesor') {

        const [profesores] = await Profesor.selectProfesorByUsuariosId(req.user.id)
        req.profesor = profesores[0]
        return next()
    }
    return res.status(401).json({ fatal: 'Tienes que ser profesor para acceder' })
}

const checkAlumno = async (req, res, next) => {
    if (req.user.rol === 'alumno') {
        const [alumnos] = await Alumno.getAlumnoByUsuariosId(req.user.id)
        req.alumno = alumnos[0]
        return next()
    }
    return res.status(401).json({ fatal: 'Tienes que ser alumno para acceder' })
}

const checkAdmin = (req, res, next) => {
    if (req.user.rol === 'admin') {
        return next()
    }
}


module.exports = { checkToken, checkProfesor, checkAlumno, checkAdmin }