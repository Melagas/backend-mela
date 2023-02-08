import options  from "./options/mysqlDB.js";

 (async () => {
    try {
        //01
        console.log('----> Borro si existe tabla');
        await options.schema.dropTableIfExists('products')

        console.log('----> Creamos tabla');
        await options.schema.createTable('products', table =>{
            table.increments('id').primary();
            table.string('name').notNullable();
            table.float('price');
            table.string('imageURL').notNullable();
        });
        
    } catch (error) {
        console.log(error);
    } finally {
        options.destroy()
    }
}
)()
