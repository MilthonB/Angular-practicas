const { response } = require('express')


const validarCampos = ( req, res = response, next) => {

    const errors = validationResult( req )
    if( !errors.isEmpty() ){
        res.status(400).json({
            ok:false,
            msj: errors.mapped()
        })
    }

    next();

}