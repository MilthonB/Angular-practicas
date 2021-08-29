const jwt = require('jsonwebtoken');


const generarJWT = ( uid, name) => {

    const payload = { uid, name};

    return new Promise( (resolve, reject) => {
        jwt.sign( payload, process.env.SECRET_JWT_SEED, {
            expiresIn: '24h',
    
        }, (error, token) => {
            if(error){
                //Todo mal
                reject( error );
                console.log(error)
            }{
                resolve( token );
                //Todo bien
            }
    
        });
    })
}

module.exports = {
    generarJWT
}