

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