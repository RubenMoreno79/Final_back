const insertAlumnos = ({ usuarios_id, foto, campoInteres }) => {
    return db.query(
        'insert into alumnos (usuarios_id, foto, campoInteres) values (?,?,?)', [usuarios_id, foto, campoInteres]
    )
};

const selectByAlumnoId = (alumnoId) => {
    return db.query(
        'select * from alumnos where id = ?', [alumnoId]
    )
};
const updateAlumno = (usuarioId, { foto, campoInteres }) => {
    return db.query(
        'update alumnos set foto = ?, campoInteres = ? where usuarios_id = ?', [foto, campoInteres, usuarioId]
    )
}

const selectByAlumnoId2 = (usuarioId) => {
    return db.query(
        'select * from usuarios where id = ?', [usuarioId]
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



module.exports = { insertAlumnos, selectByAlumnoId, deleteByAlumno, selectByAlumnoId2, getAlumnoByUsuariosId, updateAlumno }