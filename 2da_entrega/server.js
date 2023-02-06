import express from 'express'
const { Router } = express
import Products from "./container/ContainerMem";
import Carts from "./container/ContainerMem";

import {
    productosDao as productosApi,
    carritosDao as carritosApi
} from './daos/index.js'

//------------------------------------------------------------------------
// instancio servidor

const app = express()

//--------------------------------------------
// permisos de administrador

const esAdmin = true

function crearErrorNoEsAdmin(ruta, metodo) {
    const error = {
        error: -1,
    }
    if (ruta && metodo) {
        error.descripcion = `ruta '${ruta}' metodo '${metodo}' no autorizado`
    } else {
        error.descripcion = 'no autorizado'
    }
    return error
}

function soloAdmins(req, res, next) {
    if (!esAdmin) {
        res.json(crearErrorNoEsAdmin())
    } else {
        next()
    }
}

//--------------------------------------------
// configuro router de productos

const express = require("express");
const Carts = require("./container/ContainerMem")
const routerCart = express.Router();
const cart = new Carts();
const routerProd = new Router();
const product = new Products();

//carrito

routerCart.get("/", (_req,res)=>{
    const carts = cart.getAll();
    res.send(carts);
});

routerCart.post('/', (req, res) => {
        const carrito = req.body
        const newCart = cart.save(carrito);
        res.send(newCart);
    });

routerCart.post('/:car/products/:product',(req, res) => {
        try {
            const { product, car } = req.params
            const addProduct = cart.addProduct(product, car);
            res.send(addProduct);
        } catch (error) {  
            res.json({
                error: error.message,
                code: 400
            })
        }
    })

routerCart.delete('/:car/products/:product', (req, res) => {
    try{
        const {product, car} = req.params
        const deleteProd = cart.deleteByIdProd(product, car);
        res.send(deleteProd)
    }catch (error) {
        res.json({
            error: error.message,
            code: 400
        })
    }
});

routerCart.delete("/:id", (req,res)=>{
    const id = req.params.id;
    const cleanCart = cart.deleteById(parseInt(id));
    res.send(cleanCart)
 });



//Productos

//CREATE
routerProd.post('/', async (req, res) => {
    try{
        const products = req.body;
        const ids = await product.createProduct(products);
        res.json(ids);
    } catch (err){
        res.send(`Ocurrio un error en la db: ${err.message}`)
    }
    });

//TODO
routerProd.get('/', async (req, res) => {
    try{
        const products = await product.fetchAllProducts();
        res.json(products);
    } catch (err){
        res.send(`Ocurrio un error en la db: ${err.message}`)
    }
    });

//ID
routerProd.get('/:id', async (req, res) => {
    try{
        const id = parseInt(req.params.id);
        const products = await product.fetchProduct(id);
        res.json(products);
    } catch (err){
            res.send(`Ocurrio un error en la db: ${err.message}`)
    }
    });

//UPDATE
routerProd.put('/:id', async (req, res) => {
    try{
        const id = parseInt(req.params.id);
        const products = req.body;
        const dbId = await product.updateProduct(id,products);
        res.json(dbId);
    } catch (err){
            res.send(`Ocurrio un error en la db: ${err.message}`)
    }
    });

//DELETE
routerProd.delete('/:id', async (req, res) => {
    try{
        const id = parseInt(req.params.id);
        await product.deleteByIdProduct(id);
        res.send("Producto elimidado correctamente");
    } catch (err){
            res.send(`Ocurrio un error en la db: ${err.message}`)
    }
    });

//--------------------------------------------
// configuro el servidor

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static('public'))

app.use('/api/productos', productosRouter)
app.use('/api/carritos', carritosRouter)

export default app;
module.exports = routerCart;
module.exports = routerProd;