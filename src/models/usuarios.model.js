const selectById = (userId) => {
    return db.query('Select * FROM usuarios Where id = ?', [userId])
}
module.exports = { selectById }