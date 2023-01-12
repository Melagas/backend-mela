const express = require("express");
const routerProd = require("./routes/productsRouter");
const routerCart = require("./routes/cartsRouter");


const PORT = 8080;
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}))
app.use(express.static('files')); 
app.use('/api/products', routerProd);
app.use('/api/carts', routerCart);
app.get('*', function (req, res) {
    res.send({ status: "error", description: `ruta ${req.url} método ${req.method} no implementada` });
})


const server = app.listen(PORT, () => {
         console.log(`Listening app port ${server.address().port}`);
    });
    
server.on("error", (error) => {  
        console.log(`Error ${error}`)
    });  