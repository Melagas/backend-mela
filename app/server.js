const express = require('express');
const app = express();
const http = require("http").Server(app);
const io = require("socket.io")(http);

app.use(express.json());
app.use(express.urlencoded({extend:true}));
app.use(express.static('public'))
const handlebars = require('hbs');
app.set("view engine", "hbs");
app.set("views", "./views"); 
  
  const products = []
  
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
    res.sendFile(__dirname + 'index');
  });

  // io.on("connection", function (socket) {
  //   console.log("Se agregó un producto nuevo");
  //   socket.emit("products", products);
  // });
  

  //messages
  const messages = [];

  app.get('/', (req,res) => {
  res.render('index', {messages});
  });

  app.post('/messages', (req,res) => {
    messages.push(req.body)
    console.log(messages);
    res.redirect('/')
  })

  app.get("/", (req, res) => {
    res.sendFile(__dirname + './views/index.hbs',{messages});
  });
 
  // io.on("connection", (socket) => {
  //   console.log("usuario conectado " + socket.id);
  //   socket.emit("messages", messages);
  //   socket.on("new-message", (data) => {
  //     messages.push(data);
  //     io.emit("messages", messages);
  //   });
  // });
  
  // io.on("connection", (socket) => {
  //   socket.on("chat message", (msg) => {
  //     console.log(socket.id);
  //     console.warn("chat message", msg);
  //     io.emit("chat message", msg);
  //   });
  // });


//port
const PORT = 3000; 

const server = app.listen(PORT, () => {
    console.log(`Listening on port ${server.address().port}`);
});

server.on("error", (error) => {
    console.log(`An error ocurred on server ${error.message}`);
});
