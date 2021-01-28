//rutas crear usuarios
const express = require('express');
const router = express.Router();
const servicioController = require('../controllers/servicioController');
const { check } = require('express-validator');
const auth = require('../middleware/auth');



//Api/servicios  --crea servicio
router.post('/',
  auth,
  servicioController.crearServicio
);

//consultar servicios
router.get('/',
  auth,
  servicioController.obtenerServicios

);

//modificar el servicio
router.put('/:id',
  servicioController.actualizarServicio
);

//eliminar el servicio
router.delete('/:id',
  servicioController.eliminarServicio

)


module.exports = router;