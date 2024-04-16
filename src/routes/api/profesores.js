const { updateProfesor, insertProfesores, selectByProfesorId, updateUsuarios, deleteByProfesor } = require('../../models/profesores.model');

const router = require('express').Router();



router.post('/nuevo', async (req, res) => {
    try {
        const [result] = await insertProfesores(req.body, req.user.id);
        const [profesores] = await selectByProfesorId(result.insertId);

        res.json(profesores[0]);

    } catch (error) {
        res.json({ fatal: error.message })
    }
});


router.put('/editar', async (req, res) => {
    const profesorId = req.user.id

    try {

        const [result] = await updateProfesor(profesorId, req.body);
        if (result.affectedRows) {
            const [result2] = await updateUsuarios(profesorId, req.body);
            res.json(result2);
        };


    } catch (error) {
        res.json({ fatal: error.message })
    }
});

router.delete('/borrar', async (req, res) => {
    const { profesorId } = req.params
    try {
        const [result] = await deleteByProfesor(req.user.id);
        res.json(result)

    } catch (error) {
        res.json({ fatal: error.message })
    }
});

router.get('/:profesor_id', async (req, res) => {
    const { profesor_id } = req.params

    try {
        const profesor = await selectByProfesorId(profesor_id);
        res.json(profesor);
    } catch (error) {
        res.json({ fatal: error.message })

    }
});

module.exports = router