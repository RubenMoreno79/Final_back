const router = require('express').Router();


const { insert, borrarPreguntas, editarPreguntas } = require('../../models/preguntas.model')


router.post('/nuevo/:cursoid', async (req, res) => {
    const { cursoid } = req.params

    try {
        const [result] = await insert(req.body, cursoid)
        res.json(result)
    } catch (error) {
        res.json(error)
    }
});
router.delete('/borrar/:preguntasid', async (req, res) => {
    const { preguntasid } = req.params

    try {
        const [result] = await borrarPreguntas(preguntasid)
        res.json(result)
    } catch (error) {
        res.json(error)
    }
});

router.put('/editar/:preguntaid', async (req, res) => {
    const { preguntaid } = req.params
    console.log(req.params)
    try {
        const [result] = await editarPreguntas(req.body, preguntaid)
        res.json(result)
    } catch (error) {
        res.json(error)
    }
});






module.exports = router;
