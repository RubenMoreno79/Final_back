const router = require('express').Router();

const { insertAlumnos, selectByAlumnoId } = require("../../models/alumnos.model");


router.post('/nuevo', async (req, res) => {
    try {
        const [result] = await insertAlumnos(req.user.id);
        const [alumnos] = await selectByAlumnoId(result.insertId)
        res.json(alumnos[0]);

    } catch (error) {
        res.json({ fatal: error.message })
    }
});


module.exports = router