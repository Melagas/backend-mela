// function getFullName() {
//     console.log(`El nombre completo del usuario es ${usuario.nombre} ${usuario.apellido}`)
// }

// getFullName();

// function addMascotas() {
//     usuario.mascotas.push("rana")
//     console.log(usuario.mascotas)
// }

// addMascotas();

// function countMascotas() {
//     console.log(`La cantidad de mascotas es de ${usuario.mascotas.length}`)
// }

// countMascotas();

// function addBook() {
//     

//    
//     console.log(usuario.libros)
// }

// addBook();

// function getBookNames(){
//     console.log(JSON.stringify(usuario.libros))
// }

// getBookNames();

// const fs = require('fs');

// fs.writeFile('productos.txt', 'Productos', (error) => {
//     if (error) {
//         console.log(`Error: ${error}`);
//     }
// });

// class Contenedor {
//     constructor(title, price, thumbnail, id){
//         this.title = title
//         this.price = price
//         this.thumbnail = thumbnail
//         this.id = id
//     }

//     save(){
//         return fs.appendFile('productos.txt', JSON.stringify([{producto,id:1}]),(error)=>{
//             if(error){
//                 console.log(`Error: ${error}`);
//             }
//         })
//     }

//     getById(){
//         return fs.readFile('productos.txt', 'utf-8', (error) => {
//             if (error){
//                 console.log(error)
//             }else{
//                 return `${producto.id}`
//             }
//         })
//     }

    

   

// }

// const producto = new Contenedor('Mouse', 1000, 'image.png');

// producto.save();
// console.log(producto.getById());

// fs.writeFile('productos.txt', 'Productos', (error) => {
//     if (error) {
//         console.log(`Error: ${error}`);
//     }
// });

// class Contenedor {
//     constructor(title, price, thumbnail, id){
//         this.title = title
//         this.price = price
//         this.thumbnail = thumbnail
//         this.id = id
//     }

//     save(){
//         return fs.appendFile('productos.txt', JSON.stringify([{producto,id:1}]),(error)=>{
//             if(error){
//                 console.log(`Error: ${error}`);
//             }
//         })
//     }

//     getById(){
//         return fs.readFile('productos.txt', 'utf-8', (error) => {
//             if (error){
//                 console.log(error)
//             }else{
//                 return `${producto.id}`
//             }
//         })
//     }

    

   

// }

// const producto = new Contenedor('Mouse', 1000, 'image.png');

// producto.save();
// console.log(producto.getById());

//Funciona
  // async getAll(){
    //     try{
    //         await fs.promises.readFile('productos.txt', 'utf-8')
    //         console.log(data)
    //     }
    //     catch(err){
    //         console.log('Error de lectura',err)
    //     }

    // }

//     const express = require ('express')

// const app = express()

// app.get('/',(req,res)=>{
//     res.send(('<h1 style="color: blue">Bienvenidos al servidor express</h1>'));
// });

// let visitas = 1
// app.get('/visitas', (req, res) =>{res.send({message: `Cantidad de visitas es ${visitas++}`})});

// const PORT = 3000

// const server = app.listen(PORT,()=>{
//     console.log(`Servidor Http escuchado en el puerto ${server.address().port}`);
// });

// server.on('error', (error)=> {
//     console.log('Error', error)
// });