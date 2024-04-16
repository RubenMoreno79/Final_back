const insert = ({ nombre, horas, categoria, imagen, descripcion }, profesorId) => {
    return db.query('insert into cursos (nombre, horas, categoria,imagen, descripcion ,profesor_id) values (?,?,?,?,?,?)', [nombre, horas, categoria, imagen, descripcion, profesorId])
}
const edit = ({ nombre, horas, categoria, imagen, descripcion }, cursoId) => {
    return db.query('update cursos set nombre = ?, horas=?, categoria =?, imagen=?, descripcion=? where id = ?', [nombre, horas, categoria, imagen, descripcion, cursoId])
}
const borrar = (cursoId) => {
    return db.query('delete from cursos where id = ?', [cursoId])
}

const getCurso = (cursoId) => {
    return db.query('select * from cursos where id = ?', [cursoId])
}
const isProfesor = (cursoId, profesorId) => {
    return db.query('select * from cursos where id = ? and profesor_id = ?', [cursoId, profesorId])
}

module.exports = { insert, edit, borrar, getCurso, isProfesor }