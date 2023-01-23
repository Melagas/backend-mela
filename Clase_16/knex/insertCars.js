import { options } from "./options/mysqlDB.js";
import knex from "knex";

const knexConnection = knex(options);

const cars = [
    {name: 'Mate', price: 1500},
    {name: 'Taza', price: 1300},
    {name: 'Jarra', price: 2300},
    {name: 'Ensaladera', price: 3500},
    {name: 'Bandeja', price: 2500},
];

knexConnection('cars').insert(cars)

.then(() => console.log('datos cargados'))
.catch((err) => { console.log(err); throw err})
.finally(() => {
    knexConnection.destroy()
})