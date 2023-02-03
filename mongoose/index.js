import mongoose from "mongoose";
import * as model from './models/usuarios.js';


async function CRUD(){
    try {
        //Conexion con la DB
        const URL = 'mongodb://localhost:27017/ecomerce01';
        await mongoose.connect(URL, {
            useNewUrlParser: true, //
            useUnifiedTopology: true //maneja la concexion con la db
        })
        console.log('Base de datos conectada');

        //objeto
        // const user = {
        //   nombre: 'Gaston',
        //   apellido: 'Mela',
        //   email: 'gaston@gmail.com',
        //   edad: 26,
        //   password: 'qwerty'
        // }

        //array
        const usersArray = [
            {
                nombre: 'Federico',
                apellido: 'Ruiz',
                email: 'federico@gmail.com',
                edad: 25,
                password: 'qwerty'
              },
              {
                nombre: 'Mila',
                apellido: 'Mendez',
                email: 'mila@gmail.com',
                edad: 30,
                password: 'qwerty'
              },
              {
                nombre: 'Tom',
                apellido: 'Diaz',
                email: 'tom@gmail.com',
                edad: 20,
                password: 'qwerty'
              },
              {
                nombre: 'Pedro',
                apellido: 'Lopez',
                email: 'pedro@gmail.com',
                edad: 23,
                password: 'qwerty'
              }
        ]
        //instancio el modelo y le paso la data
        // const userSave = new model.users(user);
        // const savedUser = await userSave.save();
        // console.log(savedUser);

        //Add Many
        //const newUsers = await model.users.insertMany(usersArray);
        //console.log(newUsers);

        //READ
        // const usersRead = await model.users.find({nombre: 'Mila'});
        // console.log(usersRead);

        //UPDATE
        //const userUpdate = await model.users.updateOne({nombre:'Pedro'},{$set:{email:'lopez123@gmail.com'}})
        //console.log(userUpdate);

        //DELETE
        const userDelete = await model.users.deleteOne({nombre: 'Tom'})
        console.log(userDelete);


    } catch (error){
        console.log(error);
    }
}

CRUD();