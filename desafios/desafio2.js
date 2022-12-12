const fs = require('fs')

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
