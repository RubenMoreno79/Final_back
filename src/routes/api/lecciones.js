const router = require('express').Router();

const { insertLeccion, editLeccion, getLeccion } = require('../../models/lecciones.model')

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

router.put('/editar', async (req, res) => {
    //El numero es el id de la leccion que se va a editar
    try {
        const [result] = await editLeccion(req.body, 1)
        res.json(result)
    } catch (error) {
        res.json(error)
    }
});

router.get('/:idLeccion', async (req, res) => {
    const { idLeccion } = req.params

    try {
        const [result] = await getLeccion(idLeccion)
        res.json(result)
    } catch (error) {
        res.json(error)
    }
});





module.exports = router;