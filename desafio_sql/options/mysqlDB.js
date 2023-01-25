import knex from "knex";

const options = knex({
    client: 'mysql',
    connection: {
        host: '127.0.0.1',
        user: 'root',
        database: 'ecommerce'
    }
    // client: 'sqlite3',
    // connection: {
    //     filename: './DB/mydb.sqlite'
    // }
});

export default options;