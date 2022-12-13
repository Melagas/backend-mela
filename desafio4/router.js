const express = require("express");
const Products = require("./Products")

const router = express.Router();
const container = new Products();

router.get("/", (_req,res)=>{
    const products = container.getAll();
    res.send(products);
});

router.get("/:id", (req,res)=>{
    const id = req.params.id;
    const product = container.getById(parseInt(id));
    res.send(product); 
});

router.post("/", (req,res)=>{
    const product = req.body
    const newProduct = container.save(product);
    res.send(newProduct);
});

router.put("/:id", (req, res) => {
    const id = req.params.id;
    const obj = req.body;
    const newProduct = container.newId(parseInt(id), obj);
    res.send(newProduct);
})

router.delete("/:id", (req,res)=>{
   const id = req.params.id;
   const product = container.deleteById(parseInt(id));
   res.send(product)
});

module.exports = router;