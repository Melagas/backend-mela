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

// routerCart.delete('/:car/products/:product', (req, res) => {
//     try{
//         const {car, product} = req.params
//         const deleteProd = cart.deleteByIdProd(parseInt(car, product));
//         res.send(deleteProd)
//     }catch (error) {
//         res.json({
//             error: error.message,
//             code: 400
//         })
//     }
// });

routerCart.delete("/:id", (req,res)=>{
    const id = req.params.id;
    const cleanCart = cart.deleteById(parseInt(id));
    res.send(cleanCart)
 });

module.exports = routerCart;