//todo: crear las preguntas del examen
//recibir todas las preguntas de un mismo curso para el examen
//editar las preguntas
//

const insert = ({ titulo, respuesta_correcta, respuesta_incorrecta, respuesta_incorrecta2 }, cursoId) => {
    return db.query('insert into preguntas_examenes (titulo, respuesta_correcta, respuesta_incorrecta, respuesta_incorrecta2, curso_id) values (?,?,?,?,?)', [titulo, respuesta_correcta, respuesta_incorrecta, respuesta_incorrecta2, cursoId])
};


const borrarPreguntas = (preguntaId) => {
    return db.query('delete from preguntas_examenes where id = ?', [preguntaId])
}

const editarPreguntas = ({ titulo, respuesta_correcta, respuesta_incorrecta, respuesta_incorrecta2 }, preguntaId) => {
    return db.query('update  preguntas_examenes set titulo = ?,respuesta_correcta = ?, respuesta_incorrecta = ?, respuesta_incorrecta2  =? where id =?', [titulo, respuesta_correcta, respuesta_incorrecta, respuesta_incorrecta2, preguntaId])
}


module.exports = { insert, borrarPreguntas, editarPreguntas }