const fs = require('fs')

const obj = {
    title: 'Calculadora',
    price: 1000,
    thumbnail: 'image.png'
}

const processFiles = (filename) => {
    fs.writeFileSync(filename, JSON.stringify([]));
    const fileInformation = JSON.parse(fs.readFileSync(filename, 'utf-8'));
    obj = { ...obj, id: 1};
    fileInformation.push(obj);
    //console.log(fileInformation)
    fs.writeFileSync(filename, JSON.stringify(obj));
    fileInformation = JSON.parse(fs.readFileSync);

}

processFiles("fileInformation.txt");

// class Contenedor {
//     constructor(title, price, thumbnail, id){
//     this.title = title,
//     this.price = price,
//     this.thumbnail = thumbnail,
//     this.id = id
//     }

//     fs = require('fs');

//     save(producto1,producto2,producto3){
//         fs.('productos.txt',[{producto1},{producto2},{producto3}],(error)=>{
//             if(error){
//                 console.log(`Error: ${error}`);
//             }
//         })
//     }
// }

// const producto1 = new Contenedor("Calculadora", 1000, "calculadora.png")
// const producto2 = new Contenedor("Mouse", 2000, "mouse.png")
// const producto3 = new Contenedor("Teclado", 4000, "teclado.png")


// const fs = require('fs');

// fs.writeFile('data1.txt', 'Hola',(error)=>{
//                  if(error){
//                     console.log(`Error: ${error}`);
//                 }
//              });

// getById(){
//     return fs.readFile('productos.txt', JSON.stringify((producto.id)),(error)=>{
//         if(error){
//             console.log(`Error: ${error}`);
//         }else{
//             console.log(`Id: ${producto.id}`);
//         }
//     })