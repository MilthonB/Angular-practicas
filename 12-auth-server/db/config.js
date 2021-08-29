const mongoose = require('mongoose')


const dbConnection  = async() => {
    
    try{

        await mongoose.connect( process.env.BD_CNN, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('Base de datos online')


    }catch(error){
        console.log(error)
        throw new Error('Error al a hora de la incializacion Db')
    }

}


module.exports = {
    dbConnection
}