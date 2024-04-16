const insert = ({ titulo, respuesta_correcta, respuesta_incorrecta, respuesta_incorrecta2 }, cursoId) => {
    return db.query('insert into preguntas_examenes (titulo, respuesta_correcta, respuesta_incorrecta, respuesta_incorrecta2, curso_id) values (?,?,?,?,?)', [titulo, respuesta_correcta, respuesta_incorrecta, respuesta_incorrecta2, cursoId])
};


const borrarPreguntas = (cursoId) => {
    return db.query('delete from cursos where id = ?', [cursoId])
}


module.exports = { insert, borrarPreguntas }