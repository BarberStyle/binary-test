const Usuario = require('../models/Usuario');
const bcryptjs = require('bcryptjs');
const { validationResult } = require('express-validator');
const jwt = require('jsonwebtoken');

exports.crearUsuario = async (req, res) => {

    //revisar si hay errores

    //validation result resultado de validacion de routes usuarios
    const errores = validationResult(req);
    if (!errores.isEmpty()) {
        return res.status(400).json({ errores: errores.array() });
    }

    const { documento, contraseña } = req.body;

    try {
        //Revisar usuario regitrado unico
        let usuario = await Usuario.findOne({documento});

        if (usuario) {
            return res.status(400).json({ msg: 'El usuario ya existe' });
        }

        //crea el nuevo usuario
        usuario = new Usuario(req.body);

        //hashear el password
        const salt = await bcryptjs.genSalt(10);
        usuario.contraseña = await bcryptjs.hash(contraseña, salt);

        //guarda el nuevo usuario
        await usuario.save();

        //crear y guardar jwt
        const payload = {
            usuario: {
                id: usuario.id
            }
        };

        //firmar el jwt (json web token)
        jwt.sign(payload, process.env.SECRETA, {
            expiresIn: 3600
        }, (error, token) => {
            if (error) throw error;

            //mensaje de confirmacion
            res.json({ token });
        });
    } catch (error) {
        console.log(error);
        res.status(400).send(error);
    }
}