const router = require('express').Router();

const { checkToken, checkProfesor } = require('../../helpers/middlewares');
const { isProfesor } = require('../../models/cursos.model');
const { insertLeccion, editLeccion, getLeccion, borrarLeccion, getCursoId } = require('../../models/lecciones.model')

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
//TODO: acabar cosas aqui de checkprofesor y tal
router.put('/:idLeccion', checkToken, checkProfesor, async (req, res) => {
    const { idLeccion } = req.params
    const [result3] = await getCursoId(idLeccion)

    if (result3.length !== 0) {
        const [result2] = await isProfesor(result3[0].curso_id, req.profesor.id)
        console.log(result2)
        if (result2.length !== 0) {
            try {
                const [result] = await editLeccion(req.body, idLeccion)
                res.json(result)
            } catch (error) {
                res.json(error)
            }
        } else {
            res.json({ fatal: 'No tienes permisos para editar este curso' })
        }
    } else {
        res.json({ fatal: 'El curso o lección no existe' })
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