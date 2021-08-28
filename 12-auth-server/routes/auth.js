const { Router } = require('express');
const ctr = require('../controllers/auth');

const rutas = Router();

rutas.post( '/', ctr.loginUsuario);


rutas.post( '/new', ctr.crearUsuario);


rutas.get( '/renew', ctr.revalidarToken);


module.exports = rutas;