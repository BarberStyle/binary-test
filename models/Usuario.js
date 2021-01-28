'use strict'

const mongoose = require('mongoose');


const UsuariosSchema = mongoose.Schema({
    tipo: {
        type: String,
        require: true,
        trim: true
    },
    documento: {
        type: String,
        require: true,
        trim: true
    },
	nombres: {
        type: String,
        require: true,
        trim: true
    },
    apellidos: {
        type: String,
        require: true,
        trim: true
    },
    correo: {
        type: String,
        require: true,
        trim: true,
        unique: true
    },
    telefono: {
        type: Number,
        require: true,
        trim: true
    },
    contraseña: {
        type: String,
        require: true,
        trim: true
    },
    idPregunta: {
        type: Number,
        trim: true
    },
    registro: {
        type: Date,
        default: Date.now()
    }
});

module.exports = mongoose.model('Usuario', UsuariosSchema);
// servicios --> guarda los documents en la coleccion