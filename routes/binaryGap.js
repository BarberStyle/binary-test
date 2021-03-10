//rutas crear usuarios
const express = require('express');
const router = express.Router();
const binaryController = require('../controllers/binaryController');



//consultar servicios
router.get('/',
binaryController.getBinaryGap

);



module.exports = router;