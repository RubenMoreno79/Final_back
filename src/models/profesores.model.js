
const insertProfesores = ({ experiencia }, usuarios_id) => {
    return db.query(
        'insert into profesores (experiencia, usuarios_id) values (?, ?)', [experiencia, usuarios_id]
    )
};

const selectByProfesorId = (profesorId) => {
    return db.query(
        'select * from profesores where id = ?', [profesorId]
    )
<<<<<<< HEAD
}
const selectProfesorByUsuariosId = (usuarioId) => {
    return db.query(
        'select * from profesores where usuarios_id = ?', [usuarioId]
    )
}
=======
};
>>>>>>> c0ed6e43ed086c2f8aecacfad004f11f7775789d

const updateProfesor = (profesorId, { experiencia }) => {
    return db.query(
        'update profesores set experiencia = ? where usuarios_id = ?', [experiencia, profesorId]
    );
};

const updateUsuarios = (usuarios_id, { username, email, password, rol, nombre, apellidos, fecha_nacimiento, genero, telefono }) => {
    return db.query('update usuarios set username=?, email=?, password=?, rol=?, nombre=?, apellidos=?, fecha_nacimiento=?, genero=?, telefono=? where id = ?', [username, email, password, rol, nombre, apellidos, fecha_nacimiento, genero, telefono, usuarios_id])
};

const deleteByProfesor = (profesorId) => {
    return db.query('delete from usuarios where id = ?', [profesorId])
};



module.exports = { updateProfesor, insertProfesores, selectByProfesorId, updateUsuarios, deleteByProfesor, selectProfesorByUsuariosId }