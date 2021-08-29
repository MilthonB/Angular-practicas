const { validationResult } = require('express-validator');
const Usuario = require('../models/Usuario')


const cuentasCTLR = {};


cuentasCTLR.loginUsuario = ( req, res ) => {

   

    const { email,name,password } = req.body;

    try {

    } catch (error) {
        console.log(error)
        return res.status(500).json({
            ok: false,
            msj: 'Porfavor hable con el administracion'
        });
    }


    
    //Encriptacion de la constraseña
    
    //Generar el json web token

    //crear usuario de la base de datos

    
    //Generar la respuesta Exitosa
    
    
    
}; 

cuentasCTLR.crearUsuario = async ( req, res ) => {
    
    
    
    const { email,name,password } = req.body;
    
    try {
        
        //Verificar si no existe un correo igual
        const usuario = await Usuario.findOne({email});

        if( usuario ){
            return res.status(400).json({
                ok: false,
                msj: 'Ese email ta fue tomado'
            })
        }

        //crear usuario con el modelo
        const dbUsuer = new Usuario( req.body );


        //Crear usuario en la base de datos
        await dbUsuer.save();

        return res.status(201).json({
            ok: true,
            uid: dbUsuer.id,
            name,
        });


    } catch (error) {
        console.log(error)
        return res.status(500).json({
            ok: false,
            msj: 'Porfavor hable con el administracion'
        });
    }


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