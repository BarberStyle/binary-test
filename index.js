'use script'

const express = require('express');

//crea servidor
const app = express();


//leer los datos que envia el usuario
//habilitar express.json
app.use(express.json({ extended: true }));

//puerto de la app

//importar rutas
//Ruting

app.use('/api/binaryGap', require('./routes/binaryGap'));


const port = process.env.PORT || 4000
app.listen(port, () => console.log(`Server running on port: ${port}`))
