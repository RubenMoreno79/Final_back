const insertAlumnos = (usuarios_id, foto) => {
    return db.query(
        'insert into alumnos (usuarios_id, foto) values (?,?)', [usuarios_id, foto]
    )
};

const selectByAlumnoId = (alumnoId) => {
    return db.query(
        'select * from alumnos where id = ?', [alumnoId]
    )
};

const selectByAlumnoId2 = (alumnoId) => {
    return db.query(
        'select * from usuarios where id = ?', [alumnoId]
    )
};

const deleteByAlumno = (alumnoId) => {
    return db.query('delete from usuarios where id = ?', [alumnoId])
};

const getAlumnoByUsuariosId = (usuarioId) => {
    return db.query(
        'select * from alumnos where usuarios_id = ?', [usuarioId]
    )
}



module.exports = { insertAlumnos, selectByAlumnoId, deleteByAlumno, selectByAlumnoId2, getAlumnoByUsuariosId }