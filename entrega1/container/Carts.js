const Products = require("./Products");

const ERROR = {error: "producto no encontrado"};

class Carts {
    constructor() {
        this.carts = [];
    }

    getAll(){
        return this.carts;
    }

    getById(number){
        const numberFound = this.carts.find((car)=>car.id === number)
        if (numberFound){
            return numberFound
        }else {
            throw new Error(ERROR);
        }
    } 

    save(cart){
        const arrayId = this.carts.map(cart => cart.id);
        const maxId = arrayId.length === 0 ? 0 : Math.max(...arrayId);
        const id = maxId + 1;
        const newCart= {id, ...cart, 'timestamp': Date() };
        this.carts.push(newCart);
        return newCart;
        }

    addProduct(productId, carId){
        const objProducts = new Products();
    
        const productObject = objProducts.getById(parseInt(productId))
    
        if(!productObject.id){
                return productObject
            }
            
        this.carts.find ((car) => {
                if (car.id === parseInt(carId)){
                    car.stock.push(productObject)
                }
            })
                
        return this.carts
        }
    
    // deleteByIdProd(productId, carId){
    //     const objProducts = new Products();
    
    //     const productObject = objProducts.deleteById(parseInt(productId))
    
    //     if(!productObject.id){
    //             return productObject
    //         }
            
    //     this.carts.filter ((car) => {
    //             if (car.id === parseInt(carId)){
    //                 car.stock.push(productObject)
    //             }
    //         })
                
    //     return this.carts
    //     }
    
      
    
    deleteById(id){
        const deleteId = this.carts = this.carts.filter((cart) => cart.id !== id);
        if (deleteId){
            return deleteId
        }else{
            return ERROR;
        } 
    } 
}

module.exports = Carts