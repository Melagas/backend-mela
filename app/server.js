const express = require('express');
//const hbs = require("hbs");
//const handlebars = require ('express-handlebars')
const ejs = require ("ejs")
const Products = require('./api/Products')
const container = new Products()
const app = express();
const http = require("http").Server(app);
const io = require("socket.io")(http);

app.use(express.json());
app.use(express.urlencoded({extend:true}));
app.use(express.static('public'))
//app.set("view engine", "hbs");
app.set("view engine", "ejs");
app.set("views", "./views"); 
  
  let products = []
  
  app.get('/', (req, res) => {
    res.render('pages/formulario', {products});
    //res.render('index', {products});
  });
  
  app.post('/products', (req, res) => {
    products.push(req.body)
    console.log(products)
    res.redirect('/')
  });

  app.get("/", (req, res) => {
    res.sendFile(__dirname + "");
  });
  
  const messages = [
    {
      mail: "gastonmela@gmail.com",
      text: "Bienvenido a mi chat!"
    }
  ];
  
  io.on("connection", (socket) => {
    console.log("usuario conectado " + socket.id);
    socket.emit("messages", messages);
    socket.on("new-message", (data) => {
      messages.push(data);
      io.emit("messages", messages);
    });
  });
  
  io.on("connection", (socket) => {
    socket.on("chat message", (msg) => {
      console.log(socket.id);
      console.warn("chat message", msg);
      io.emit("chat message", msg);
    });
  });

const PORT = 3000; 

const server = app.listen(PORT, () => {
    console.log(`Listening on port ${server.address().port}`);
});

server.on("error", (error) => {
    console.log(`An error ocurred on server ${error.message}`);
});
