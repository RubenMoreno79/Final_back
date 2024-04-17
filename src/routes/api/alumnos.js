const router = require('express').Router();


const { checkAlumno } = require('../../helpers/middlewares');
const { insertAlumnos, deleteByAlumno, selectByAlumnoId2 } = require("../../models/alumnos.model");
const { updateUsuarios } = require("../../models/profesores.model");
const bcrypt = require('bcrypt');




router.post('/nuevo', async (req, res) => {
    console.log(req.user)
    try {
        const [result] = await insertAlumnos(req.user.id, req.body.foto);
        res.json(result);
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


router.get('/alumno', async (req, res) => {


    try {

        res.json(req.user);
    } catch (error) {
        res.json({ fatal: error.message })

    }
});





module.exports = router