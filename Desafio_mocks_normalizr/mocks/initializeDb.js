import options from "./options/mysqlDB.js";

(async () => {
    try{
        console.log("initialize");
        await options.schema.dropTableIfExists("products");

        await options.schema.createTable('products', table =>{
            table.increments('id').primary();
            table.string('name').notNullable();
            table.float('price');
            table.string('imageURL').notNullable();
        });
        
    } catch (err) {
        console.log(err.message);
    } finally {
        console.log("finish");
        options.destroy();
    } 
   
})();
