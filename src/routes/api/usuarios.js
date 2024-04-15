const router = require('express').Router();
const { insert, selectByEmail } = require('../../models/usuarios.model');
const bcrypt = require('bcrypt');



router.post('/registro', async (req, res) => {

    req.body.password = bcrypt.hashSync(req.body.password, 10)

    try {
        const [result] = await insert(req.body);
        res.json(result);

    } catch (error) {
        res.json(error);

    }

});



router.post('/login', async (req, res) => {
    const { email, password } = req.body;

    try {
        const [usuarios] = await selectByEmail(email);
        if (usuarios.lenght === 0) {
            return res.json({ fatal: 'Email y/0 incorrectos' });
        }

        const usuario = usuarios[0];

        const iguales = bcrypt.compareSync(password, usuario.password);
        if (!iguales) {
            return res.json({ fatal: 'Email y/o incorrectos' });
        }

    } catch (error) {
        res.json(error);
    }
});




module.exports = router;