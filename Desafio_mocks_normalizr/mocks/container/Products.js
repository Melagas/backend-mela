import options from "../options/mysqlDB.js";

class Products {
    
    async createProduct(products){
        const id = await options("products").insert(products);
        return id;
    }

    fetchAllProducts(){
        return options("products").select("*").limit(100);
    }

    fetchProduct(id){
        return options("products").where("id", id).select("*");
    } 

   
    async updateProduct(id, products){
        const dbId = await options("products").where("id", id).update(products);
        return dbId;
    }
    
    deleteByIdProduct(id){
       return options("products").where("id", id).del();
    } 
}

export default Products;