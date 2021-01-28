const mongoose = require('mongoose');

const EmpleadoSchema = mongoose.Schema({
    tipo: {
        type: String,
        required: true,
        trim: true
    },
    documento: {
        type: Number,
        required: true,
        trim: true
    },
    nombres: {
        type: String,
        required: true,
        trim: true
    },
    apellidos: {
        type: String,
        required: true,
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
    fecha: {
        type: Date,
        require: true,
    },
    perfil: {
        type: String,
        require: true,
        trim: true
    },
    contrasena: {
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

module.exports = mongoose.model('Empleado', EmpleadoSchema);
