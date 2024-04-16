const router = require('express').Router();
const { checkProfesor, checkToken } = require('../../helpers/middlewares');
const { isProfesor } = require('../../models/cursos.model');
const { insert, borrarPreguntas } = require('../../models/preguntas.model')


router.post('/nuevo', async (req, res) => {

    try {
        const [result] = await insert(req.body, 1)
        res.json(result)
    } catch (error) {
        res.json(error)
    }
});

// router.delete('/:cursoId', async (req, res) => {
//     const { cursoId } = req.params
//     const [result2] = await isProfesor(cursoId, req.profesor.id)

//     if (result2[0] !== undefined) {
//         try {
//             const [result] = await borrarPreguntas(cursoId)
//             res.json(result)
//         } catch (error) {
//             res.json(error)
//         }
//     } else {
//         res.json({ fatal: 'No tienes permisos para borrar este Curso' })
//     }

// });


router.delete('/:idPreguntas', async (req, res) => {
    const { idPregunta } = req.params
    const [result2] = await isProfesor(cursoId, req.profesor.id)

    if (result2[0] !== undefined) {
        try {
            const [result] = await borrarPreguntas(idPregunta)
            res.json(result)
        } catch (error) {
            res.json(error)
        }
    } else {
        res.json({ fatal: 'No tienes permisos para borrar este Curso' })
    }
});





module.exports = router;
