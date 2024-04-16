const router = require('express').Router();

const { insertAlumnos, selectByAlumnoId, deleteByAlumno, selectByAlumnoId2 } = require("../../models/alumnos.model");
const { updateUsuarios } = require("../../models/profesores.model");
const bcrypt = require('bcrypt');




router.post('/nuevo', async (req, res) => {
    try {
        const [result] = await insertAlumnos(req.user.id);
        const [alumnos] = await selectByAlumnoId(result.insertId)
        res.json(alumnos[0]);

    } catch (error) {
        res.json({ fatal: error.message })
    }
});


router.delete('/borrar', async (req, res) => {
    const alummoId = req.user.id;

    try {
        const [result] = await deleteByAlumno(alummoId);
        res.json(result);


    } catch (error) {
        res.json({ fatal: error.message })

    }
});

router.put('/editar', async (req, res) => {

    req.body.password = bcrypt.hashSync(req.body.password, 10)

    try {
        const [result] = await updateUsuarios(req.user.id, req.body);
        res.json(result);

    } catch (error) {
        res.json({ fatal: error.message })
    }
});


router.get('/:alumno_id', async (req, res) => {

    const { alumno_id } = req.params

    try {
        const [alumno] = await selectByAlumnoId2(alumno_id);
        res.json(alumno);
    } catch (error) {
        res.json({ fatal: error.message })

    }
});





module.exports = router