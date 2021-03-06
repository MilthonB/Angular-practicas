const { validationResult } = require('express-validator');
const Usuario = require('../models/Usuario')
const bcrypt = require('bcryptjs')
const { generarJWT } = require('../helpers/jwt')


const cuentasCTLR = {};


cuentasCTLR.loginUsuario = async (req, res) => {



    const { email, password } = req.body;



    try {

        const dbUser = await Usuario.findOne({ email })

        if (!dbUser) {
            return res.status(400).json({
                ok: false,
                msg: 'Credenciales no son validaz'
            });
        }

        // COnfirmar si el password hace match

        const validPassword = bcrypt.compareSync(password, dbUser.password)

        if (!validPassword) {
            return res.status(400).json({
                ok: false,
                msg: 'Verifique su contraseña'
            });
        }

        // Generar el JWT

        const token = await generarJWT(dbUser.id, dbUser.name);


        //respuesta del servicio
        return res.json({
            ok: true,
            uid: dbUser.id,
            name: dbUser.name,
            email,
            token
        })

    } catch (error) {
        console.log(error)
        return res.status(500).json({
            ok: false,
            msg: 'Porfavor hable con el administracion'
        });
    }







};

cuentasCTLR.crearUsuario = async (req, res) => {



    const { email, name, password } = req.body;

    try {

        //Verificar si no existe un correo igual
        const usuario = await Usuario.findOne({ email });

        if (usuario) {
            return res.status(400).json({
                ok: false,
                msg: 'Ese email ya fue tomado'
            })
        }

        //crear usuario con el modelo
        const dbUsuer = new Usuario(req.body);

        //Encriptación de la contraseña
        const salt = bcrypt.genSaltSync();
        dbUsuer.password = bcrypt.hashSync(password, salt);

        //Generar el jwt
        const token = await generarJWT(dbUsuer.id, name)

        //Crear usuario en la base de datos
        await dbUsuer.save();

        return res.status(201).json({
            ok: true,
            uid: dbUsuer.id,
            name,
            email,
            token
        });


    } catch (error) {
        console.log(error)
        return res.status(500).json({
            ok: false,
            msg: 'Porfavor hable con el administracion'
        });
    }


};

cuentasCTLR.revalidarToken = async(req, res) => {
 
    const { uid, name } = req;

    const dbUser = await Usuario.findById(uid);

    const token = await generarJWT(uid, name)

    
    return res.json({
        ok: true,
        uid,
        name,
        email: dbUser.email,
        token
    });


};


module.exports = cuentasCTLR;