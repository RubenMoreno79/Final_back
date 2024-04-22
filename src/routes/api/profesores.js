const { checkToken } = require('../../helpers/middlewares');
const { updateProfesor, insertProfesores, updateUsuarios, deleteByProfesor, selectUsuario, selectProfesorByUsuariosId } = require('../../models/profesores.model');
const bcrypt = require('bcrypt');

const router = require('express').Router();



router.post('/nuevo', async (req, res) => {
    try {
        const [result] = await insertProfesores(req.body);
        res.json(result);
    } catch (error) {
        res.json(error)
    }
});


router.put('/editar', checkToken, async (req, res) => {
    if (req.body.password) {
        req.body.password = bcrypt.hashSync(req.body.password, 10)
    }
    try {
        const [result] = await updateProfesor(req.user.id, req.body);
        if (result.affectedRows) {
            const [result2] = await updateUsuarios(req.user.id, req.body);
            res.json(result2);
        };
    } catch (error) {
        res.json(error)
    }
});

router.delete('/borrar', checkToken, async (req, res) => {

    try {
        const [result] = await deleteByProfesor(req.user.id);
        res.json(result)
    } catch (error) {
        res.json(error)
    }
});



router.get('/profesor', checkToken, async (req, res) => {
    try {
        const [result] = await selectUsuario(req.user.id)
        res.json(result)
    } catch (error) {
        res.json(error)
    }
});

router.get('/profesor2', checkToken, async (req, res) => {
    try {
        const [result] = await selectProfesorByUsuariosId(req.user.id)
        res.json(result)
    } catch (error) {
        res.json(error)
    }
});

module.exports = router