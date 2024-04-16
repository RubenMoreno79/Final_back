const insertAlumnos = (usuarios_id) => {
    return db.query(
        'insert into alumnos (usuarios_id) values (?)', [usuarios_id]
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



module.exports = { insertAlumnos, selectByAlumnoId, deleteByAlumno, selectByAlumnoId2 }