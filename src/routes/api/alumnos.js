const router = require('express').Router();


const { checkToken } = require('../../helpers/middlewares');
const { insertAlumnos, deleteByAlumno, selectByAlumnoId2, updateAlumno, getAlumnoByUsuariosId } = require("../../models/alumnos.model");
const { updateUsuarios } = require("../../models/profesores.model");
const bcrypt = require('bcrypt');




router.post('/nuevo', async (req, res) => {

    try {
        const [result] = await insertAlumnos(req.body);
        res.json(result);
    } catch (error) {
        res.json({ fatal: error.message })
    }
});


router.delete('/borrar', checkToken, async (req, res) => {

    try {
        const [result] = await deleteByAlumno(req.user.id);
        res.json(result);


    } catch (error) {
        res.json({ fatal: error.message })

    }
});

router.put('/editar', checkToken, async (req, res) => {
    if (req.body.password) {
        req.body.password = bcrypt.hashSync(req.body.password, 10)
    }

    try {
        const [result] = await updateUsuarios(req.user.id, req.body);
        if (result.affectedRows) {
            const [result2] = await updateAlumno(req.user.id, req.body)
            res.json(result2);
        }
    } catch (error) {
        res.json(error)
    }
});


router.get('/alumno', checkToken, async (req, res) => {

    try {
        const [result] = await selectByAlumnoId2(req.user.id)
        res.json(result);
    } catch (error) {
        res.json(error)

    }
});
router.get('/alumno2', checkToken, async (req, res) => {

    try {
        const [result] = await getAlumnoByUsuariosId(req.user.id)
        res.json(result)
    } catch (error) {
        res.json(error)
    }
});





module.exports = router