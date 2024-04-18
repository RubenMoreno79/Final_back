const router = require('express').Router();


const { checkProfesor } = require('../../helpers/middlewares');
const { isProfesor } = require('../../models/cursos.model');
const { insert, borrarPreguntas, editarPreguntas, getAllPreguntas, getCursoId } = require('../../models/preguntas.model')


router.post('/nuevo/:cursoid', checkProfesor, async (req, res) => {
    const { cursoid } = req.params
    console.log(req.profesor.id)
    const [result2] = await isProfesor(cursoid)
    try {
        const [result] = await insert(req.body, cursoid)
        res.json(result)
    } catch (error) {
        res.json(error)
    }
});
//TODO: checkear que el profesor es el dueño del curso
router.delete('/borrar/:preguntasid', checkProfesor, async (req, res) => {
    const { preguntasid } = req.params
    const [result3] = await getCursoId(preguntasid)

    if (result3.length !== 0) {
        const [result2] = await isProfesor(result3[0].curso_id, req.profesor.id)
        if (result2.length !== 0) {
            try {
                const [result] = await borrarPreguntas(preguntasid)
                res.json(result)
            } catch (error) {
                res.json(error)
            }
        } else {
            res.json({ fatal: 'No tienes permiso para borrar este curso' })
        }
    } else {
        res.json({ fatal: 'El curso o la pregunta no existe' })
    }

});

router.put('/editar/:preguntaid', checkProfesor, async (req, res) => {
    const { preguntaid } = req.params
    const [result3] = await getCursoId(preguntaid)

    if (result3.length !== 0) {
        const [result2] = await isProfesor(result3[0].curso_id, req.profesor.id)
        console.log(result2)
        if (result2.length !== 0) {
            try {
                const [result] = await editarPreguntas(req.body, preguntaid)
                res.json(result)
            } catch (error) {
                res.json(error)
            }

        } else {
            res.json({ fatal: 'No tienes permisos para editar este curso' })
        }

    } else {
        res.json({ fatal: 'El curso o la pregunta no existe' })
    }

});

router.get('/all/:cursoid', async (req, res) => {
    const { cursoid } = req.params

    try {
        const [result] = await getAllPreguntas(cursoid)
        res.json(result)
    } catch (error) {
        res.json(error)
    }
});






module.exports = router;
