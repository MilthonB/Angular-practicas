const { Router } = require('express');
const { check } = require('express-validator');
const ctr = require('../controllers/auth');
const { validarCampos } = require('../middleware/validar-campos');

const rutas = Router();

//Login
rutas.post( '/',[
    check('email','El email es obligatorio o no se reconcoe').isEmail(),
    check('password','La contraseña no cumpleto con los parametros requeridos').isLength({min:6}),
    validarCampos
] ,ctr.loginUsuario);

//Crear Usuario
rutas.post( '/new',[
    check('nombre','El campo nombre es obligatorio').not().isEmpty(),
    check('email','El email es obligatorio o no se reconcoe').isEmail(),
    check('password','La contraseña no cumpleto con los parametros requeridos').isLength({min:6}),
    validarCampos
] ,ctr.crearUsuario);

//Generar nuevo token de usuario
rutas.get( '/renew', ctr.revalidarToken);


module.exports = rutas;