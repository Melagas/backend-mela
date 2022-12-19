const express = require('express');
//const hbs = require("hbs");
const ejs = require ("ejs")
const Products = require('./api/Products')

const container = new Products()

const app = express();
app.use(express.json());
app.use(express.urlencoded({extend:true}));
app.use(express.static('public'))
//app.set("view engine", "hbs");
app.set("view engine", "ejs");
app.set("views", "./views"); 

app.get("/hello", (req, res) => {
    res.render("index", {
      title: "Mi primer plantilla EJS JS",
      mensaje: "Usando EJS JS en express",
      name: "Juan",
    });
  });
  
  let products = []
  
  app.get('/', (req, res) => {
    res.render('pages/formulario', {products});
  });
  
  app.post('/products', (req, res) => {
    products.push(req.body)
    console.log(products)
    res.redirect('/')
  });

const PORT = 3000; 

const server = app.listen(PORT, () => {
    console.log(`Listening on port ${server.address().port}`);
});

server.on("error", (error) => {
    console.log(`An error ocurred on server ${error.message}`);
});
