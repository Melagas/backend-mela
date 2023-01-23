import options from "../options/mysqlDB.js";

class Carts {
    
    async createCart(cars){
        const id = await options("cars").insert(cars);
        return id;
    }

    fetchAllCarts(){
        return options("cars").select("*").limit(100);
    }

    fetchCart(id){
        return options("cars").where("id", id).select("*");
    } 

   
    async updateCarts(id, cars){
        const dbId = await options("cars").where("id", id).update(cars);
        return dbId;
    }
    
    deleteById(id){
       return options("cars").where("id", id).del();
    } 
}

export default Carts;