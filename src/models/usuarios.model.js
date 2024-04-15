const insert = ({ username, email, password, rol, nombre, apellidos, fecha_nacimiento, genero, telefono }) => {
    return db.query('insert into usuarios (username, email, password, rol, nombre, apellidos, fecha_nacimiento, genero, telefono) values (?, ?, ?, ?, ?, ?, ?, ?, ?) ', [username, email, password, rol, nombre, apellidos, fecha_nacimiento, genero, telefono])
};

const select = () => {
    return db.query('select * from usuarios')
};

const selectByEmail = (email) => {
    return db.query('select * from usuarios where email = ?', [email])
};

const selectById = (userId) => {
    return db.query('Select * FROM usuarios Where id = ?', [userId])
}



module.exports = { insert, select, selectById, selectByEmail }

