import { Router } from "express";
import Products from "../container/Products.js";

const routerProd = new Router();
const product = new Products();

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

export default routerProd;