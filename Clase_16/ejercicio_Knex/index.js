import { options } from "./options/mysqlDB.js";
import knex from "knex";

const knexConnection = knex(options);

 (async () => {
    try {
        //01
        console.log('----> Borro si existe tabla');
        await knexConnection.schema.dropTableIfExists('articulos')

        console.log('----> Creamos tabla');
        await knexConnection.schema.createTable('articulos', table =>{
            table.increments('id').primary();
            table.string('nombre', 15).notNullable();
            table.string('codigo', 10).notNullable();
            table.float('precio');
            table.integer('stock');
        });

        //02
        console.log('----> Insertar registros');
        const articulos = [
            {nombre: 'Mouse', codigo: 'AB-12', precio: 2000, stock: 15},
            {nombre: 'Teclado', codigo: 'AB-14', precio: 4500, stock: 10},
            {nombre: 'Celular', codigo: 'AB-17', precio: 7500, stock: 5},
            {nombre: 'Computadora', codigo: 'AB-18', precio: 9900, stock: 3},
            {nombre: 'Auriculares', codigo: 'AB-11', precio: 5600, stock: 20},
        ];
        await knexConnection('articulos').insert(articulos)

        //03
        console.log('----> Mostramos registros');
        const result = await knexConnection('articulos').select('*')
        console.log(result);

        //04
        console.log('----> Borrar registros');
        await knexConnection.from('articulos').where('id', 3).del()

        //05
        console.log('----> Actualizar registros');
        await knexConnection.from('articulos').where('id', 2).update({stock: 0})
        

    } catch (error) {
        console.log(error);
    } finally {
        knexConnection.destroy()
    }
}
)()
