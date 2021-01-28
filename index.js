'use script'

const express = require('express');
const conectarDB = require('./config/db');
const cors = require('cors');

//crea servidor
const app = express();


//Conectar la base de datos
conectarDB();

app.use(cors());

//leer los datos que envia el usuario
//habilitar express.json
app.use(express.json({ extended: true }));

//puerto de la app

//importar rutas
//Ruting
app.use('/api/usuarios', require('./routes/usuarios'));
app.use('/api/auth', require('./routes/auth'));
app.use('/api/servicios', require('./routes/servicios'));
//app.use('/api/productos', require('./routes/productos'));
app.use('/api/empleados', require('./routes/empleados'));


const port = process.env.PORT || 5000
app.listen(port, '0.0.0.0', () => console.log(`Server running on port: ${port}`))
