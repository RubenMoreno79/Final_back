
const insert = ({ titulo, respuesta_correcta, respuesta_incorrecta, respuesta_incorrecta2 }, cursoId) => {
    return db.query('insert into preguntas_examenes (titulo, respuesta_correcta, respuesta_incorrecta, respuesta_incorrecta2, curso_id) values (?,?,?,?,?)', [titulo, respuesta_correcta, respuesta_incorrecta, respuesta_incorrecta2, cursoId])
};

const borrarPreguntas = (preguntaId) => {
    return db.query('delete from preguntas_examenes where id = ?', [preguntaId])
}

const editarPreguntas = ({ titulo, respuesta_correcta, respuesta_incorrecta, respuesta_incorrecta2 }, preguntaId) => {
    return db.query('update  preguntas_examenes set titulo = ?,respuesta_correcta = ?, respuesta_incorrecta = ?, respuesta_incorrecta2  =? where id =?', [titulo, respuesta_correcta, respuesta_incorrecta, respuesta_incorrecta2, preguntaId])
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


module.exports = { insert, borrarPreguntas, editarPreguntas, getAllPreguntas, getCursoId, isCurso }