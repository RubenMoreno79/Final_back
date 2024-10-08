
const insertProfesores = ({ experiencia, especialidad, foto, descripcion_experiencia, usuarios_id }) => {
    return db.query(
        'insert into profesores (experiencia, usuarios_id, especialidad,foto, descripcion_experiencia) values (?, ?, ?, ?, ?)', [experiencia, usuarios_id, especialidad, foto, descripcion_experiencia]
    )
};

const selectUsuario = (usuario_id) => {
    return db.query(
        'select * from usuarios where id = ?', [usuario_id]
    )
}

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

const updateProfesor = (profesorId, { experiencia, especialidad, foto, descripcion_experiencia }) => {
    return db.query(
        'update profesores set experiencia = ?, especialidad = ?, foto = ?, descripcion_experiencia = ?  where usuarios_id = ?', [experiencia, especialidad, foto, descripcion_experiencia, profesorId]
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



module.exports = { updateProfesor, insertProfesores, selectByProfesorId, updateUsuarios, deleteByProfesor, selectProfesorByUsuariosId, selectUsuario }