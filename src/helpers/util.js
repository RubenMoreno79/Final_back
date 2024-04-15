const jwt = require('jsonwebtoken')

const createToken = (user) => {
    const obj = {
        id: user.id,
        rol: user.rol
    }
    return jwt.sign(obj, process.env.SECRET_KEY)
}

module.exports = { createToken }