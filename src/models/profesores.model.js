
const insertProfesores = ({ experiencia }, usuarios_id) => {
    return db.query(
        'insert into profesores (experiencia, usuarios_id) values (?, ?)', [experiencia, usuarios_id]
    )
};

const selectByProfesorId = (profesorId) => {
    return db.query(
        'select * from profesores where id = ?', [profesorId]
    )
}
const selectProfesorByUsuariosId = (usuarioId) => {
    return db.query(
        'select * from profesores where usuarios_id = ?', [usuarioId]
    )
}

const updateProfesor = (profesorId, { experiencia }) => {
    return db.query(
        'update profesores set experiencia = ? where usuarios_id = ?', [experiencia, profesorId]
    );
};

const updateUsuarios = (usuarios_id, { username, password, nombre, apellidos, fecha_nacimiento, genero, telefono }) => {
    if (password) {
        return db.query('update usuarios set username=?, password=?, nombre=?, apellidos=?, fecha_nacimiento=?, genero=?, telefono=? where id = ?', [username, password, nombre, apellidos, fecha_nacimiento, genero, telefono, usuarios_id])
    } else {
        return db.query('update usuarios set username=?, nombre=?, apellidos=?, fecha_nacimiento=?, genero=?, telefono=? where id = ?', [username, nombre, apellidos, fecha_nacimiento, genero, telefono, usuarios_id])
    }

};

const deleteByProfesor = (profesorId) => {
    return db.query('delete from usuarios where id = ?', [profesorId])
};



module.exports = { updateProfesor, insertProfesores, selectByProfesorId, updateUsuarios, deleteByProfesor, selectProfesorByUsuariosId }