const insert = ({ nombre, horas, categoria }, profesorId) => {
    return db.query('insert into cursos (nombre, horas, categoria, profesor_id) values (?,?,?,?)', [nombre, horas, categoria, profesorId])
}
const edit = ({ nombre, horas, categoria }, cursoId) => {
    return db.query('update cursos set nombre = ?, horas=?, categoria =? where id = ?', [nombre, horas, categoria, cursoId])
}
const borrar = (cursoId) => {
    return db.query('delete from cursos where id = ?', [cursoId])
}

const getCurso = (cursoId) => {
    return db.query('select * from cursos where id = ?', [cursoId])
}

module.exports = { insert, edit, borrar, getCurso }