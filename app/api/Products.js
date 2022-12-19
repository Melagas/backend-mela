const ERROR = {error: "producto no encontrado"};

class Products {
    constructor(){
        this.products = [];

    }

    getAll(){
        return this.products;
    }

    getById(number){
            const numberFound = this.products.find((product)=>product.id === number)
            if (numberFound){
                return numberFound
            }else {
                return ERROR;
            }
        }

    save(product){
        const arrayId = this.products.map(product => product.id);
        const maxId = arrayId.length === 0 ? 0 : Math.max(...arrayId);
        const id = maxId + 1;
        const newObj = {id, ...product };
        this.products.push(newObj);
        return newObj;
        }
    
    deleteById(id){
        const deleteId = this.products = this.products.filter((product) => product.id !== id);
        if (deleteId){
            return deleteId
        }else{
            return ERROR;
        } 
    }

    newId(id, product) {
        const foundProduct = this.products.find((product) => product.id === id);
        if (foundProduct){
          const filteredProducts = this.products.filter((product) => product.id !== id);
          const newProduct = { id, ...product };
          this.products = [...filteredProducts, newProduct];
          return newProduct;
        } else {
          return ERROR;
        }
      }
    
}

module.exports = Products