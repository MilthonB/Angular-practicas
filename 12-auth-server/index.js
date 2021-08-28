const express = require('express');
const cors = require('cors');

// creacion de servidor/aplicacion de express
const app = express();

//CORS
app.use( cors() )

//Lectura y parseo de body
app.use(express.json());

// Delcaracion de sistemas de rutas
app.use( '/api/auth', require('./routes/auth') );


app.listen( 4000, () => {
    console.log(`El servidor esta corriendo en ${ 4000 }`)
});