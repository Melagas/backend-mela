const admin = require ('firebase-admin');
const serviceAcount = require ('./DB/coderbackend-9fbbd-firebase-adminsdk-540iq-ea17b1e1df.json');

//config para la concexón
admin.initializeApp({
    credential: admin.credential.cert(serviceAcount),
    databaseURL: 'https://coderBackend.firebaseio.com'
})

console.log('Base de datos conectada');


async function CRUD(){
    //le decimos a nuestra app que vamos atrabajar con firebase
    const db = admin.firestore();
    //crear coleccion
    const query = db.collection('products')
    //CREATE
    // try {
    //     let id = 1
    //     let doc = query.doc(`${id}`);
    //     await doc.create({name: 'Reloj', price: 400, stock: 5, description:'Gris y naranja'})

    //     id++
    //     doc = query.doc(`${id}`);
    //     await doc.create({name: 'Ventilador', price: 600, stock: 3, description:'Blanco'})

    //     id++
    //     doc = query.doc(`${id}`);
    //     await doc.create({name: 'Cable USB', price: 200, stock: 15, description:'Violeta'})

    // }catch (error){
    //     console.log(error);
    // }
    //READ
    // try{
    //     const querySnapshot = await query.get()
    //     let docs = querySnapshot.docs

    //     const response = docs.map((doc) => ({
    //         id: doc.id,
    //         name: doc.data().name,
    //         price: doc.data().price,
    //         stock: doc.data().stock,
    //         description: doc.data().description,
    //     }))
    //     console.log(response);
    // }catch (error){
    //     console.log(error);
    // }
    //READ BY ID

    try{
        let id = 2
        const doc = query.doc(`${id}`)
        const item = await doc.get()
        const response = item.data()

        console.log(response);

    }catch(error){
        console.log(error);
    }
    //UPDATE
    // try{
    //     let id = 2
    //     const doc = query.doc(`${id}`)
    //     const item = await doc.update({stock: 7})
    //     console.log(item);
    // }catch(error){
    //     console.log(error);
    // }

    //DELETE
    try{
        let id = 1;
        const doc = query.doc(`${id}`)
        let item = await doc.delete()
        console.log(item);
    }catch (error){
        console.log(error);
    }
}

CRUD();