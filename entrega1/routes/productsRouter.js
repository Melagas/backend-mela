const express = require("express");
const Products = require("../container/Products")


const routerProd = express.Router();
const container = new Products();

function createErrorNoAdmin(url, method) {
    const error = {
        error: -1,
    }
    if (url && method) {
        error.descripcion = `ruta '${url}' metodo '${method}' no autorizado`
    } else {
        error.descripcion = 'no autorizado'
    }
    return error
}

const itsAdmin = true

function onlyAdmins(req, res, next) {
    if (!itsAdmin) {
        res.json(createErrorNoAdmin(req.url, req.method))
    } else {
        next()
    }
}

//Products

routerProd.get("/", (_req,res)=>{
    const products = container.getAll();
    res.send(products);
});

routerProd.get("/:id", (req,res)=>{
    const id = req.params.id;
    const product = container.getById(parseInt(id));
    res.send(product); 
});

routerProd.post("/", onlyAdmins, (req,res)=>{
    const product = req.body
    const newProduct = container.save(product);
    res.send(newProduct);
});

routerProd.put("/:id", onlyAdmins, (req, res) => {
    const id = req.params.id;
    const obj = req.body;
    const newProduct = container.newId(parseInt(id), obj);
    res.send(newProduct);
})

routerProd.delete("/:id", onlyAdmins, (req,res)=>{
   const id = req.params.id;
   const product = container.deleteById(parseInt(id));
   res.send(product)
});

module.exports = routerProd;