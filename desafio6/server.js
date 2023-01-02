const express = require("express");
const app = require("express")();
const http = require("http").Server(app);
const io = require("socket.io")(http);
const hbs = require("hbs");
const Products = require('./api/Products')
const container = new Products()

const port = 3000;

app.use(express.json());
app.use(express.urlencoded({extend:true}));

app.set("view engine", "hbs");
app.set("views", "./views"); 
app.use(express.static("public"));
  
  let products = []
  
  app.get('/', (req, res) => {
    //res.render('pages/formulario', {products});
    res.render('index', {products});
  });
  
  app.post('/products', (req, res) => {
    products.push(req.body)
    console.log(products)
    res.redirect('/')
  });

  app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
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
  
const server = http.listen(port, () => {
    console.log(`Escuchando app en el puerto ${server.address().port}`);
  });

  // const server = app.listen(port, () => {
  //   console.log(`Escuchando app en el puerto ${server.address().port}`);
  // });

server.on("error", (error) => {
    console.log(`An error ocurred on server ${error.message}`);
});
