import mongoose from "mongoose";

//Definicion de schema
const userSchema = new mongoose.Schema({
    nombre: String,
    apellido: String,
    dni: {type: String, unique: true}
})

const userModel = mongoose.model('usuarios', userSchema)

const URL = 'mongodb+srv://Melagas:Mendiolaza16$@cluster0.mgjwsbe.mongodb.net/ecommerce?retryWrites=true&w=majority'

try {
    //Conexión a la DB
    await mongoose.connect(URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true  
    })
    console.log('Base de datos conectada');

    //Listamos la informacion de DB
    const users = await userModel.find({});
    console.log(users);

} catch (error){
    console.log(`Error de conexión con la base de datos ${error}`);
}