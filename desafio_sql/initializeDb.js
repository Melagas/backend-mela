import options from "./options/mysqlDB.js";

(async () => {
    try{
        console.log("initialize");
        await options.schema.dropTableIfExists("products");
        await options.schema.dropTableIfExists("cars");

        await options.schema.createTable("cars", (table) => {
            table.increments('id').primary();
            table.string('nombre').notNullable();
            table.date('fecha').notNullable();
            
        });
        await options.schema.createTable("products", (table) => {
            table.increments('id').primary();
            table.string('nombre').notNullable();
            table.string('description').notNullable();
            table.string('link').notNullable();
            table.float('precio');
            table.integer('stock');
            table.integer('cars_id').unsigned().notNullable();
            table.foreign('cars_id').references('cars.id');
        });
    } catch (err) {
        console.log(err.message);
    } finally {
        console.log("finish");
        options.destroy();
    } 
   
})();
