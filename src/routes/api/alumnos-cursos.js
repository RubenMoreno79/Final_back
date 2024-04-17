const { checkAlumno } = require('../../helpers/middlewares');
const { getbyAlumnoId, updateProgreso, updateFinalizado, updateNota, borrarCurso } = require('../../models/alumnos-cursos.model');

const router = require('express').Router();

//TODO: Buscar de donde cae la informacion para el curso id
//TODO: Que informacion se manda y como desde el front para que suba el progreso y la  nota mirar como se envia

router.get('/todos', checkAlumno, async (req, res) => {
    //poner como sacar el id del alumno al enviar la peticion
    try {
        const [result] = await getbyAlumnoId(req.alumno.id)
        res.json(result)
    } catch (error) {
        res.json(error)
    }
});

router.put('/newprogress', checkAlumno, async (req, res) => {
    try {
        const [result] = await updateProgreso(10, 8, req.alumno.id)
        res.json(result)
    } catch (error) {
        res.json(error)
    }
});

router.put('/finish', checkAlumno, async (req, res) => {
    try {
        const [result] = await updateFinalizado(8, req.alumno.id)
        res.json(result)
    } catch (error) {
        res.json(error)
    }
});

router.put('/nota', checkAlumno, async (req, res) => {
    try {
        const [result] = await updateNota(7, 8, req.alumno.id)
        res.json(result)
    } catch (error) {
        res.json(error)
    }
});

router.delete('/borrar', checkAlumno, async (req, res) => {
    try {
        const [result] = await borrarCurso(1, req.alumno.id)
        res.json(result)
    } catch (error) {
        res.json(error)
    }
});
module.exports = router;