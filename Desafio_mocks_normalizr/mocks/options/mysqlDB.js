import knex from "knex";

const options = knex({
    client: 'mysql',
    connection: {
        host: '127.0.0.1',
        user: 'root',
        database: 'ecommerce02'
    }
});

export default options;