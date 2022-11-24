const fs = require('fs')

const data = fs.readFileSync('./productos.txt', 'utf-8')

class Contenedor {
    constructor (productos){
    this.data = data
    this.productos = productos

    }
    async save(){
        try{
           await fs.promises.writeFile('./productos.txt', JSON.stringify(productos, null, 3))
        }
        catch(err){
            console.log(err)
        }
    }

    // async getById(){
    //     try{
    //         await fs.promises.readFile('productos.txt', 'utf-8')
    //         console.log(this.data.map(productos=>productos.id))
    //     }
    //     catch(err){
    //         console.log(err)
    //     }

    // }

    async getAll(){
        try{
            await fs.promises.readFile('productos.txt', 'utf-8')
            console.log(data)
        }
        catch(err){
            console.log('Error de lectura',err)
        }

    }

    async deleteById(){

    }

    async deleteAll(){
        try{
            await fs.promises.unlink('productos.txt', 'utf-8')
            console.log('Datos borrados')
        }
        catch(err){
            console.log('Error al borrar datos')
        }
    }
}

const productos = new Contenedor ([{
    name: 'Teclado',
    price: 2000,
    thumbnail: 'image.png',
    id: 1,
},
{
    name: 'Mouse',
    price: 1000,
    thumbnail: 'image.png',
    id:2
},
{
    name: 'Camara',
    price: 500,
    thumbnail: 'image.png',
    id:3
}])


productos.save();
productos.getAll();
//productos.getById();
//productos.deleteAll();