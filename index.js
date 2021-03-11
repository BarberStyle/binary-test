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

app.use('/api/binarygap', require('./routes/binaryGap'));

app.get('/',(req, res)=> {
     res.send("HOLA BABY LO ESTAS HACIENDO BIEN");
})




const port = process.env.PORT || 3000
app.listen(port, '0.0.0.0', () => console.log(`Server running on port: ${port}`));
