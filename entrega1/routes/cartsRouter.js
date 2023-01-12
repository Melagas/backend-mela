const express = require("express");
const Carts = require("../container/Carts")


const routerCart = express.Router();
const cart = new Carts();

routerCart.get("/", (_req,res)=>{
    const carts = cart.getAll();
    res.send(carts);
});

routerCart.post('/', (req, res) => {
        const carrito = req.body
        const newCart = cart.save(carrito);
        res.send(newCart);
    });

// routerCart.post('/:id/products',(req, res) => {
//     const product = req.body
//     const addProduct = cart.addProduct(product);
//     res.send(addProduct);
// })

routerCart.delete("/:id", (req,res)=>{
    const id = req.params.id;
    const cleanCart = cart.deleteById(parseInt(id));
    res.send(cleanCart)
 });

// routerCart.delete('/:id/products/:id_prod', (req, res) => {
//     res.send()
// })

module.exports = routerCart;