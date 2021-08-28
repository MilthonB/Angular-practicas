const express = require('express');
const cors = require('cors');
require('dotenv').config()


// creacion de servidor/aplicacion de express
const app = express();

//Accesos a Público
app.use( express.static('public') )


//CORS
app.use( cors() )

//Lectura y parseo de body
app.use(express.json());

// Delcaracion de sistemas de rutas
app.use( '/api/auth', require('./routes/auth') );


app.listen( process.env.PORT, () => {
    console.log(`El servidor esta corriendo en ${ process.env.PORT }`)
});