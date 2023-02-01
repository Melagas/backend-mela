const fs = require('fs')
const { getMaxListeners } = require('process')

    class Conteiner {
        constructor (fileName,products=[],id=0){
        this.products = products
        this.fileName = fileName
        this.id = id
    
        }
        async save(product){
            try{
            this.products.push({  
                id: this.id += 1,
                ...product
            })
             await fs.promises.writeFile(`./${this.fileName}.txt`, JSON.stringify(this.products, null, 2))
            }
             catch(err){
                console.log(err)
            }
        }
        
        async getById(number){
            try{ 
                const numberFound = this.products.find(product=>product.id === number)
                if (numberFound){
                    return numberFound
                }else {
                    return null
                }
            }
            catch(err){
                console.log(err)
            }
    
        }
    
        async getAll(products){
           try{
            const content = await fs.promises.readFile(`./${this.fileName}`, products= this.products, 'utf-8')
            return JSON.parse(content)
           }
           catch(err){
            return []
           }
        } 

        async deleteById(id){
                this.products = this.products.filter(product => product.id !== id);
                await fs.promises.writeFile(`./${this.fileName}.txt`, JSON.stringify(this.products, null, 2));
        }
    
        async deleteAll(){
            try{
                await fs.promises.writeFile(`./${this.fileName}.txt`, this.products = [], 'utf-8')
                console.log('Datos borrados')
            }
            catch(err){
                console.log('Error al borrar datos')
            }
        }
       
    }
    
    const product = new Conteiner ('stock')
    
    const obj = {
        name:"Mouse",
        price: 1000,
        thumbnail: "image.png"
    };

    const obj2 = {
        name: "Teclado",
        price: 2000,
        thumbnail: "image.png"
    }

    const obj3 = {
        name:"Escritorio",
        price: 3000,
        thumbnail: "image.png"
    }
    
    
    product.save(obj);
    product.save(obj2);
    product.save(obj3);
    //console.log(product.getById(2));
    // product.getAll();
    //product.deleteById(3);
    // //product.deleteAll();



module.exports = Conteiner
// [
// {id:1, title:'Mouse', price:500, thumbnail:'mouse.png'},
// {id:2, title:'Teclado', price:100, thumbnail:'teclado.png'},
// {id:3, title:'Computadora', price:320, thumbnail:'computadora.png'},
// {id:4, title:'Hub', price:1200, thumbnail:'hub.png'},
// {id:5, title:'Lampara Led', price:3000, thumbnail:'lampara.png'},
// {id:6, title:'Pad', price:4500, thumbnail:'pad.png'},
// {id:7, title:'Escritorio', price:2200, thumbnail:'escritorio.png'},
// {id:8, title:'Silla', price:1900, thumbnail:'silla.png'},
// {id:9, title:'Auriculares', price:5000, thumbnail:'auriculares.png'}
// ]

// [
//     {email:'gaston@gmail.com', text:'Hola, todo bien?'},
//     {email:'eliseo@gmail.com', text:'Muy bien! y vos?'},
//     {email:'gaston@gmail.com', text:'Bien! Te sumas a un partido hoy a las 20hs?'},
//     {email:'eliseo@gmail.com', text:'Me sumo'},
//     {email:'gaston@gmail.com', text:'Genial!'},
//     {email:'eliseo@gmail.com', text:'Hay que llevar algun color de remera en especial?'},
//     {email:'gaston@gmail.com', text:'Si, azul!'},
//     {email:'eliseo@gmail.com', text:'Perfecto, nos vemos ahi!'}
// ]