const router = require('express').Router();
const { insert, edit } = require('../../models/cursos.model')


router.post('/nuevo', async (req, res) => {
    //Hay que cambiar el nuevo despues de req.user por el id del profesor que va a crear el curso
    try {
        const [result] = await insert(req.body, 1)
        console.log(result)
        res.json(result)
    } catch (error) {
        res.json(error)
    }
});

router.put('/editar', async (req, res) => {
    //Hay que añadir el id del curso desde req.params para cambiar el numero 1
    console.log('hola')
    try {
        const [result] = await edit(req.body, 1)
        res.json(result)
    } catch (error) {
        res.json(error)
    }
})



module.exports = router;