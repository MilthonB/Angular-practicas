

const cuentasCTLR = {};


cuentasCTLR.loginUsuario = ( req, res ) => {
    return res.json({
        ok: true,
        msj: 'Login'
    });
}; 

cuentasCTLR.crearUsuario = ( req, res ) => {
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