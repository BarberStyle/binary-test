'use strict'

const mongoose = require('mongoose');


const ProductosSchema = mongoose.Schema({
	nombre: {
        type: String,
        require: true,
        unique:true,
        trim: true
    },
    disponibles: {
        type: Number,
        require: true,
        trim: true
    },
    medida: {
        type: String,
        require: true,
        trim: true
    },
    cantidadMed: {
        type: Number,
        require: true,
        trim: true
    },
    tamaño: {
        type: Number,
        trim: true
    },
    tipo: {
        type: String,
        require: true,
        trim: true
    },
    marca: {
        type: String,
        require: true,
        trim: true
    },
    precio: {
        type: Number,
        require: true,
        trim: true
    },
    idProveedor: {
        type: Number,
        trim: true
    },
    registro: {
        type: Date,
        default: Date.now()
    }
});

module.exports = mongoose.model('Producto', ProductosSchema);
// productos --> guarda los documents en la coleccion
