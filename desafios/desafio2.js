const fs = require('fs')
const desafio = async () => {
    class Contenedor {
        constructor (fileName,productos=[],id=0){
        this.productos = productos
        this.fileName = fileName
        this.id = id
    
        }
        async save(producto){
            try{
            this.productos.push({  
                id: this.id += 1,
                ...producto
            })
             await fs.promises.writeFile(`./${this.fileName}.txt`, JSON.stringify(this.productos, null, 2))
            }
             catch(err){
                console.log(err)
            }
        }
    
        async getById(numero){
            try{ 
                const numberFound = this.productos.find(producto=>producto.id === numero)
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
    
        async getAll(){
            const content = this.productos;
            return content;
        }
    
        async deleteById(id){
                this.productos = this.productos.filter(producto => producto.id !== id);
                await fs.promises.writeFile(`./${this.fileName}.txt`, JSON.stringify(this.productos, null, 2));
        }
    
        async deleteAll(){
            try{
                await fs.promises.writeFile(`./${this.fileName}.txt`, this.productos = [], 'utf-8')
                console.log('Datos borrados')
            }
            catch(err){
                console.log('Error al borrar datos')
            }
        }
       
    }
    
    const producto = new Contenedor ('stock')
    
    const obj = {
        name:'Mouse',
        price: 1000,
        thumbnail: 'image.png'
    };
    
    
    await producto.save(obj);
    await producto.save(obj);
    await producto.save(obj);
    console.log(await producto.getById(2));
    console.log(producto.getAll());
    //await producto.deleteById(3);
    //producto.deleteAll();
}
desafio();


