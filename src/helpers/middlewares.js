const jwt = require('jsonwebtoken')

const Usuario = require('../models/usuarios.model')

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

module.exports = { checkToken }