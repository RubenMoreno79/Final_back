const insertLeccion = ({ imagen, video, texto }, curso_id) => {
    return db.query(
        'insert into lecciones (imagen, video, texto, curso_id) values (?,?,?,?)', [imagen, video, texto, curso_id]
    )
}

const editLeccion = ({ imagen, video, texto }, leccion_id) => {
    return db.query(
        'update lecciones set imagen =?, video =?, texto =? where id = ?', [imagen, video, texto, leccion_id]
    )
}
const getLeccion = (leccion_id) => {
    return db.query(
        'select * from lecciones where id = ?', [leccion_id]
    )
}

const borrarLeccion = (leccion_id) => {
    return db.query(
        'delete from lecciones where id = ?', [leccion_id]
    )
}

const getCursoId = (leccion_id) => {
    return db.query(
        'select lecciones.curso_id from lecciones where id = ?', [leccion_id]
    )
}

const getAllLecciones = (curso_id) => {
    return db.query(
        'select * from lecciones where curso_id = ?', [curso_id]
    )
}

const isAlumno = (cursoId, alumnoId) => {
    return db.query(
        'select * from alumnos_has_cursos where cursos_id = ? and alumno_id = ?', [cursoId, alumnoId]
    )
}

module.exports = { insertLeccion, editLeccion, getLeccion, borrarLeccion, getCursoId, getAllLecciones, isAlumno }