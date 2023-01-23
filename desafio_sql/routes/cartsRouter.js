import { Router } from "express";
import Carts from "../container/Carts.js";

const routerCart = new Router();
const cart = new Carts();

//CREATE
routerCart.post('/', async (req, res) => {
    try{
        const cars = req.body;
        const ids = await cart.createCart(cars);
        res.json(ids);
    } catch (err){
        res.send(`Ocurrio un error en la db: ${err.message}`)
    }
    });

//TODO
routerCart.get('/', async (req, res) => {
    try{
        const cars = await cart.fetchAllCarts();
        res.json(cars);
    } catch (err){
        res.send(`Ocurrio un error en la db: ${err.message}`)
    }
    });

//ID
routerCart.get('/:id', async (req, res) => {
    try{
        const id = parseInt(req.params.id);
        const cars = await cart.fetchCart(id);
        res.json(cars);
    } catch (err){
            res.send(`Ocurrio un error en la db: ${err.message}`)
    }
    });

//UPDATE
routerCart.put('/:id', async (req, res) => {
    try{
        const id = parseInt(req.params.id);
        const cars = req.body;
        const dbId = await cart.updateCarts(id,cars);
        res.json(dbId);
    } catch (err){
            res.send(`Ocurrio un error en la db: ${err.message}`)
    }
    });

//DELETE
routerCart.delete('/:id', async (req, res) => {
    try{
        const id = parseInt(req.params.id);
        await cart.deleteById(id);
        res.send("Carrito elimidado correctamente");
    } catch (err){
            res.send(`Ocurrio un error en la db: ${err.message}`)
    }
    });

export default routerCart;