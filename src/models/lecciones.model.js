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

module.exports = { insertLeccion, editLeccion, getLeccion }