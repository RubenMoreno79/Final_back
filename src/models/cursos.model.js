const insert = ({ nombre, horas, categoria, imagen, descripcion, contenido }, profesorId) => {
    return db.query('insert into cursos (nombre, horas, categoria,imagen, descripcion, contenido ,profesor_id) values (?,?,?,?,?,?, ?)', [nombre, horas, categoria, imagen, descripcion, contenido, profesorId])
}
const edit = ({ nombre, horas, categoria, imagen, descripcion, contenido }, cursoId) => {
    return db.query('update cursos set nombre = ?, horas=?, categoria =?, imagen=?, descripcion=?, contenido =? where id = ?', [nombre, horas, categoria, imagen, descripcion, contenido, cursoId])
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

const getAll = () => {
    return db.query('select * from cursos')
}

const getByCategory = (categoria) => {
    return db.query('select * from cursos where cursos.categoria = ?', [categoria])
}

module.exports = { insert, edit, borrar, getCurso, isProfesor, getAll, getByCategory }