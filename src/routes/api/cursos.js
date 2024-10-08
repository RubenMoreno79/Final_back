const router = require('express').Router();
const { checkProfesor, checkToken } = require('../../helpers/middlewares');
const { insert, edit, getCurso, borrar, isProfesor, getAll, getByCategory, getAllCursosFromProfesor, getProfesorId } = require('../../models/cursos.model')


router.get('/', async (req, res) => {
    try {
        const [result] = await getAll()
        res.json(result)
    } catch (error) {
        res.json(error)
    }
});

router.get('/getbyprofesor', checkToken, checkProfesor, async (req, res) => {
    const [result2] = await getProfesorId(req.user.id)
    try {
        const [result] = await getAllCursosFromProfesor(result2[0].id)
        res.json(result)
    } catch (error) {
        res.json(error)
    }
});


router.get('/category/:categoria', async (req, res) => {

    try {
        const [result] = await getByCategory(req.params.categoria)
        res.json(result)
    } catch (error) {
        res.json(error)
    }
});

router.post('/nuevo', checkToken, checkProfesor, async (req, res) => {
    try {
        const [result] = await insert(req.body, req.profesor.id)
        res.json(result)
    } catch (error) {
        res.json(error)
    }
});


router.put('/:cursoId', checkToken, checkProfesor, async (req, res) => {
    const { cursoId } = req.params
    const [result2] = await isProfesor(cursoId, req.profesor.id)

    if (result2[0] !== undefined) {
        try {
            const [result] = await edit(req.body, cursoId)
            res.json(result)
        } catch (error) {
            res.json(error)
        }
    } else {
        res.json({ fatal: 'No tienes permisos para editar este Curso' })
    }
})

router.get('/:cursoId', async (req, res) => {
    const { cursoId } = req.params

    try {
        const [result] = await getCurso(cursoId)
        res.json(result)
    } catch (error) {
        res.json(error)
    }
});

router.delete('/:cursoId', checkToken, checkProfesor, async (req, res) => {
    const { cursoId } = req.params
    const [result2] = await isProfesor(cursoId, req.profesor.id)

    if (result2[0] !== undefined) {
        try {
            const [result] = await borrar(cursoId)
            res.json(result)
        } catch (error) {
            res.json(error)
        }
    } else {
        res.json({ fatal: 'No tienes permisos para borrar este Curso' })
    }

});




module.exports = router;