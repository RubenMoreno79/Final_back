
const insert = ({ titulo, enunciado, respuesta_correcta, respuesta_incorrecta1, respuesta_incorrecta2, respuesta_incorrecta3 }, cursoId) => {
    return db.query('insert into preguntas_examenes (titulo,enunciado, respuesta_correcta, respuesta_incorrecta1, respuesta_incorrecta2,respuesta_incorrecta3, curso_id) values (?,?,?,?,?,?,?)', [titulo, enunciado, respuesta_correcta, respuesta_incorrecta1, respuesta_incorrecta2, respuesta_incorrecta3, cursoId])
};

const borrarPreguntas = (preguntaId) => {
    return db.query('delete from preguntas_examenes where id = ?', [preguntaId])
}

const editarPreguntas = ({ titulo, enunciado, respuesta_correcta, respuesta_incorrecta1, respuesta_incorrecta2, respuesta_incorrecta3 }, preguntaId) => {
    return db.query('update  preguntas_examenes set titulo = ?,enunciado =?,respuesta_correcta = ?, respuesta_incorrecta1 = ?, respuesta_incorrecta2 =?, respuesta_incorrecta3  =? where id =?', [titulo, enunciado, respuesta_correcta, respuesta_incorrecta1, respuesta_incorrecta2, respuesta_incorrecta3, preguntaId])
}

const getAllPreguntas = (cursoid) => {
    return db.query(
        'select * from preguntas_examenes where curso_id = ?', [cursoid]
    )
}
const getCursoId = (preguntaId) => {
    return db.query(
        'select curso_id from preguntas_examenes where id = ?', [preguntaId]
    )
}
const isCurso = (cursoId) => {
    return db.query(
        'select * from cursos where id = ?', [cursoId]
    )
}
const isAlumno = (cursoId, alumnoId) => {
    return db.query(
        'select * from alumnos_has_cursos where cursos_id = ? and alumno_id = ?', [cursoId, alumnoId]
    )
}


module.exports = { insert, borrarPreguntas, editarPreguntas, getAllPreguntas, getCursoId, isCurso, isAlumno }