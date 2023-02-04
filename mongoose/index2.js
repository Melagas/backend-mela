import mongoose from "mongoose";
import * as model from './models/estudiantes.js';


function gradeAverage(students) {
    let sumNotas = 0
    students.forEach(student => {
        sumNotas += student.nota
    })
    console.log(`Promedio: ${(sumNotas / students.length).toFixed(2)}`)
}

async function crud(){
    try {
        //Conexion con la DB
        const URL = 'mongodb://localhost:27017/colegio';
        await mongoose.connect(URL, {
            useNewUrlParser: true, //
            useUnifiedTopology: true //maneja la concexion con la db
        })
        console.log('Base de datos conectada');

       
        //array
        const estudiantesArray = [
        { nombre: 'Pedro', apellido: 'Mei', edad: 21, dni: '31155898', curso: '1A', nota: 7 },
        { nombre: 'Ana', apellido: 'Gonzalez', edad: 32, dni: '27651878', curso: '1A', nota: 8 },
        { nombre: 'José', apellido: 'Picos', edad: 29, dni: '34554398', curso: '2A', nota: 6 },
        { nombre: 'Lucas', apellido: 'Blanco', edad: 22, dni: '30355874', curso: '3A', nota: 10 },
        { nombre: 'María', apellido: 'García', edad: 36, dni: '29575148', curso: '1A', nota: 9 },
        { nombre: 'Federico', apellido: 'Perez', edad: 41, dni: '320118321', curso: '2A', nota: 5 },
        { nombre: 'Tomas', apellido: 'Sierra', edad: 19, dni: '38654790', curso: '2B', nota: 4 },
        { nombre: 'Carlos', apellido: 'Fernández', edad: 33, dni: '26935670', curso: '3B', nota: 2 },
        { nombre: 'Fabio', apellido: 'Pieres', edad: 39, dni: '4315388', curso: '1B', nota: 9 },
        { nombre: 'Daniel', apellido: 'Gallo', edad: 25, dni: '37923460', curso: '3B', nota: 2 }
    ]

        //Add Many
        //const newEstudiantes = await model.estudiantes.insertMany(estudiantesArray);
        //console.log(newEstudiantes);

        //READ
        //const estudiantesRead = await model.estudiantes.find({nombre: 'Tomas'});
        //console.log(estudiantesRead);

        //ORDENAR
        // const estudiantesOrganized = await model.estudiantes.find({}).sort({nombre: 1})
        // console.log(estudiantesOrganized);

        //const estudianteYoung = await model.estudiantes.find({}).sort({edad: 1}).skip(0).limit(1);
        //console.log(estudianteYoung);

        //const sutudentsNameLastName = await model.estudiantes.find({}, {nombre:1, apellido:1, curso:1, _id:0}).sort({apellido:-1});
        //console.log(sutudentsNameLastName);

        //const betterStudent = await model.estudiantes.find({nota:10});
        //console.log(betterStudent);

        //const studentsForAvg = await model.estudiantes.find({})
        //gradeAverage(studentsForAvg);

        const studentsForAvg1A = await model.estudiantes.find({ curso: '1A' })
        gradeAverage(studentsForAvg1A);






        //Disconect
        await mongoose.disconnect();



    } catch (error){
        console.log(error);
    }
}

crud();