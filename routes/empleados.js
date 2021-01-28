//rutas crear usuarios
const express = require('express');
const router = express.Router();
const empleadoController = require('../controllers/empleadoController');
const { check } = require('express-validator');
const auth = require('../middleware/auth');

//Api/empleados  --crea un empleado
router.post('/',
  auth,
  empleadoController.crearEmpleado
);

//consultar empleados
router.get('/',
  auth,
  empleadoController.obtenerEmpleados

);

//eliminar empleado
router.delete('/:id',
  auth,
  empleadoController.eliminarEmpleado

)

//modificar el empleado
router.put('/:id',
empleadoController.actualizarEmpleado
);

module.exports = router;