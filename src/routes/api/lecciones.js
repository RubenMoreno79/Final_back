const router = require('express').Router();

const { checkToken, checkProfesor } = require('../../helpers/middlewares');
const { isProfesor } = require('../../models/cursos.model');
const { insertLeccion, editLeccion, getLeccion, borrarLeccion } = require('../../models/lecciones.model')

router.post('/nuevo', async (req, res) => {
    //el numero es el id del curso que va enlazado a las lecciones
    try {
        console.log('entra')
        const [result] = await insertLeccion(req.body, 3)
        res.json(result)
    } catch (error) {
        res.json(error)
    }
});

router.put('/:idLeccion', checkToken, checkProfesor, async (req, res) => {
    const { idLeccion } = req.params
    const [result2] = await isProfesor(cursoId, req.profesor.id)
    console.log(result2)

    try {
        const [result] = await editLeccion(req.body, idLeccion)
        res.json(result)
    } catch (error) {
        res.json(error)
    }
});

router.get('/:idLeccion', async (req, res) => {
    const { idLeccion } = req.params
    console.log(idLeccion)

    try {
        const [result] = await getLeccion(idLeccion)
        res.json(result)
    } catch (error) {
        res.json(error)
    }
});

router.delete('/:idLeccion', checkToken, checkProfesor, async (req, res) => {
    console.log('entra')

    const { idLeccion } = req.params
    try {
        const [result] = await borrarLeccion(idLeccion)
        res.json(result)
    } catch (error) {
        res.json(error)
    }
});





module.exports = router;