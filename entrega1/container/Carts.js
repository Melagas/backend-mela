//const Products = require("./Products");

const ERROR = {error: "producto no encontrado"};

class Carts {
    constructor() {
        this.carts = [];
    }

    getAll(){
        return this.carts;
    }

    save(cart){
        const arrayId = this.carts.map(cart => cart.id);
        const maxId = arrayId.length === 0 ? 0 : Math.max(...arrayId);
        const id = maxId + 1;
        const newCart= {id, ...cart };
        this.carts.push(newCart);
        return newCart;
        }

    // addProduct(){
    //     const fillCart = this.carts.push(Products);
    //         return fillCart;
    //         }
    
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