const router = require('express').Router();

const { checkProfesor, checkAlumno } = require('../../helpers/middlewares');
const { isProfesor } = require('../../models/cursos.model');
const { insertLeccion, editLeccion, getLeccion, borrarLeccion, getCursoId, getAllLecciones, isAlumno } = require('../../models/lecciones.model')

router.post('/new/:idCurso', checkProfesor, async (req, res) => {
    const { idCurso } = req.params
    try {
        const [result] = await insertLeccion(req.body, idCurso)
        res.json(result)
    } catch (error) {
        res.json(error)
    }
});
router.put('/update/:idLeccion', checkProfesor, async (req, res) => {
    const { idLeccion } = req.params
    const [result3] = await getCursoId(idLeccion)

    if (result3.length !== 0) {
        const [result2] = await isProfesor(result3[0].curso_id, req.profesor.id)
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

    try {
        const [result] = await getLeccion(idLeccion)
        res.json(result)
    } catch (error) {
        res.json(error)
    }
});

router.delete('/delete/:idLeccion', checkProfesor, async (req, res) => {
    const { idLeccion } = req.params
    const [result3] = await getCursoId(idLeccion)

    if (result3.length !== 0) {
        const [result2] = await isProfesor(result3[0].curso_id, req.profesor.id)
        if (result2.length !== 0) {
            try {
                const [result] = await borrarLeccion(idLeccion)
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

router.get('/all/alumnos/:curso_id', checkAlumno, async (req, res) => {
    const { curso_id } = req.params
    const [result2] = await isAlumno(curso_id, req.alumno.id)
    if (result2 !== 0) {
        try {
            const [result] = await getAllLecciones(curso_id)
            res.json(result)
        } catch (error) {
            res.json(error)
        }
    } else {
        res.json({ fatal: 'No tienes permiso para acceder a este curso' })
    }
});

router.get('/all/profesores/:curso_id', async (req, res) => {
    const { curso_id } = req.params
    const [result2] = await isProfesor(curso_id, req.user.id)
    if (result2 !== 0) {
        try {
            const [result] = await getAllLecciones(curso_id)
            res.json(result)
        } catch (error) {
            res.json(error)
        }
    } else {
        res.json({ fatal: 'No tienes permiso para acceder a este curso' })
    }
});





module.exports = router;