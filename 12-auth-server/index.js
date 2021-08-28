const express = require('express');


const app = express();


app.use( '/api/auth', require('./routes/auth') );
// app.get( '/', ( req, res ) => {
//     res.json(
//         {
//             ok: true,
//             msj: 'Todo salio bien',
//             uid: 123
//         }
//     )
// });


app.listen( 4000, () => {
    console.log(`El servidor esta corriendo en ${ 4000 }`)
});