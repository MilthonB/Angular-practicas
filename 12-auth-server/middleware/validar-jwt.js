const { response } = require('express');
const jwt = require('jsonwebtoken');


const validarJWT = ( req, res = Response, next ) => {

    const token = req.header('x-token');

    if (!token) {
        return res.status(401).json({
            ok: false,
            msj: 'Erro en el token',
            token
        });
    }


    try {
        
        const {uid, name } =jwt.verify( token, process.env.SECRET_JWT_SEED );
        req.uid  = uid;
        req.name = name;


    } catch (error) {
        
        return res.status(401).json({
            ok: false,
            msj: 'Token no valido'
        });

    }

    next();

};


module.exports = {
    validarJWT
}