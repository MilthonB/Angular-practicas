const { Router } = require('express')


const rutas = Router();

rutas.post( '/', ( req, res ) => {
    return res.json({
        ok: true,
        msj: 'Login'
    });
} );


rutas.post( '/new', ( req, res ) => {
    return res.json({
        ok: true,
        msj: 'Nuevo usuario'
    });
} );


rutas.get( '/renew', ( req, res ) => {
    return res.json({
        ok: true,
        msj: 'Renew'
    });
} );


module.exports = rutas;