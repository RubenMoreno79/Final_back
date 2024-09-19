
const getbyAlumnoId = (alumnoId) => {
    return db.query(
        'select * from alumnos_has_cursos as ac join cursos c on c.id = ac.cursos_id where ac.alumno_id = ?', [alumnoId]
    )
}
const updateProgreso = (newProgress, curso_id, alumno_id) => {
    return db.query(
        'update alumnos_has_cursos set progreso =? where cursos_id  = ? and alumno_id =?', [newProgress, curso_id, alumno_id]
    )
}


const updateFinalizado = (curso_id, alumno_id) => {
    return db.query(
        'update alumnos_has_cursos set finalizado = ? where cursos_id = ? and alumno_id = ? ', [1, curso_id, alumno_id]
    )
}

const updateNota = (nota, curso_id, alumno_id) => {
    return db.query(
        'update alumnos_has_cursos set nota = ?  where cursos_id = ? and alumno_id = ? ', [nota, curso_id, alumno_id]
    )
}
const borrarCurso = (curso_id, alumno_id) => {
    return db.query(
        'delete from alumnos_has_cursos where cursos_id = ? and alumno_id = ?', [curso_id, alumno_id]
    )
}

const crearCursoAlumno = (curso_id, alumno_id) => {
    return db.query(
        'insert into alumnos_has_cursos (alumno_id, cursos_id) values(?,?)', [alumno_id, curso_id]
    )
}

const getAllCursoFromAlumno = (curso_id, alumno_id) => {
    return db.query(
        'select * from alumnos_has_cursos where cursos_id = ? and alumno_id = ?', [curso_id, alumno_id]
    )
}

module.exports = { getbyAlumnoId, updateProgreso, updateFinalizado, updateNota, borrarCurso, crearCursoAlumno, getAllCursoFromAlumno }