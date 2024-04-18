const { checkAlumno } = require('../../helpers/middlewares');
const { getbyAlumnoId, updateProgreso, updateFinalizado, updateNota, borrarCurso, crearCursoAlumno, getAllCursoFromAlumno } = require('../../models/alumnos-cursos.model');

const router = require('express').Router();




router.get('/todos', checkAlumno, async (req, res) => {
    //poner como sacar el id del alumno al enviar la peticion
    try {
        const [result] = await getbyAlumnoId(req.alumno.id)
        res.json(result)
    } catch (error) {
        res.json(error)
    }
});

router.put('/newprogress/:progress/:idcurso', checkAlumno, async (req, res) => {
    const { progress, idcurso } = req.params
    try {
        const [result] = await updateProgreso(progress, idcurso, req.alumno.id)
        res.json(result)
    } catch (error) {
        res.json(error)
    }
});

router.put('/finish/:idcurso', checkAlumno, async (req, res) => {
    const { idcurso } = req.params
    try {
        const [result] = await updateFinalizado(idcurso, req.alumno.id)
        res.json(result)
    } catch (error) {
        res.json(error)
    }
});

router.put('/nota/:nota/:idcurso', checkAlumno, async (req, res) => {
    const { nota, idcurso } = req.params
    try {
        const [result] = await updateNota(nota, idcurso, req.alumno.id)
        res.json(result)
    } catch (error) {
        res.json(error)
    }
});

router.delete('/borrar/:idcurso', checkAlumno, async (req, res) => {
    const { idcurso } = req.params
    try {
        const [result] = await borrarCurso(idcurso, req.alumno.id)
        res.json(result)
    } catch (error) {
        res.json(error)
    }
});

router.post('/nuevo/:idcurso', checkAlumno, async (req, res) => {
    const { idcurso } = req.params
    try {
        const [result] = await crearCursoAlumno(idcurso, req.alumno.id)
        res.json(result)
    } catch (error) {
        res.json(error)
    }
});

router.get('/info/:idcurso', checkAlumno, async (req, res) => {
    const { idcurso } = req.params
    try {
        const [result] = await getAllCursoFromAlumno(idcurso, req.alumno.id)
        res.json(result)
    } catch (error) {
        res.json(error)
    }
});
module.exports = router;