const { validationResult } = require('express-validator');


const cuentasCTLR = {};


cuentasCTLR.loginUsuario = ( req, res ) => {

   

    const { email,usuario,password } = req.body;
    console.log(email,usuario,password)


    return res.json({
        ok: true,
        msj: 'Login'
    });
}; 

cuentasCTLR.crearUsuario = ( req, res ) => {

    const errors = validationResult( req )
    console.log(errors)

    if( !errors.isEmpty() ){
        res.status(400).json({
            ok:false,
            msj: errors.mapped()
        })
    }   

    const { email,password } = req.body;
    console.log(email,password)


    return res.json({
        ok: true,
        msj: 'Nuevo usuario'
    });
}; 

cuentasCTLR.revalidarToken = ( req, res ) => {
    return res.json({
        ok: true,
        msj: 'Renew'
    });
};


module.exports = cuentasCTLR;