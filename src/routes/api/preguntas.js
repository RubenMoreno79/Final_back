const router = require('express').Router();


const { checkProfesor, checkAlumno } = require('../../helpers/middlewares');
const { isProfesor } = require('../../models/cursos.model');
const { insert, borrarPreguntas, editarPreguntas, getAllPreguntas, getCursoId, isCurso } = require('../../models/preguntas.model')


router.post('/nuevo/:cursoid', checkProfesor, async (req, res) => {
    const { cursoid } = req.params
    const [result3] = await isCurso(cursoid)
    const [result2] = await isProfesor(cursoid, req.profesor.id)
    if (result3.length !== 0) {
        if (result2.length !== 0) {
            try {
                const [result] = await insert(req.body, cursoid)
                res.json(result)
            } catch (error) {
                res.json(error)
            }
        } else {
            res.json({ fatal: 'No tienes permiso para crear preguntas en este curso' })
        }

    } else {
        res.json({ fatal: 'El curso no existe' })
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
//TODO: Comprobar que el alumno pueda ver el curso y que este dentro del curso
router.get('/all/alumnos/:cursoid', checkAlumno, async (req, res) => {
    const { cursoid } = req.params
    const [result3] = await isCurso(cursoid)
    console.log(result3)
    if (result3.length !== 0) {
        try {
            const [result] = await getAllPreguntas(cursoid)
            res.json(result)
        } catch (error) {
            res.json(error)
        }
    } else {
        res.json({ fatal: 'El curso no existe' })
    }

});

router.get('/all/profesores/:cursoid', checkProfesor, async (req, res) => {
    const { cursoid } = req.params
    const [result3] = await isCurso(cursoid)
    console.log(result3)
    if (result3.length !== 0) {
        const [result2] = await isProfesor(cursoid, req.profesor.id)
        if (result2.length !== 0) {
            try {
                const [result] = await getAllPreguntas(cursoid)
                res.json(result)
            } catch (error) {
                res.json(error)
            }

        } else {
            res.json({ fatal: 'No tienes permiso para ver estas preguntas ya que no eres su profesor' })
        }

    } else {
        res.json({ fatal: 'El curso no existe' })
    }

});






module.exports = router;
