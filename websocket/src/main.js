const express = require('express')

const { Server: HttpServer } = require('http')
const { Server: Socket } = require('socket.io')


const ContainerMemory = require('../container/containerFiles.js')
const ContainerFiles = require('../container/containerMemory.js')

//--------------------------------------------
// instancio servidor, socket y api
const app = express()
const httpServer = new HttpServer(app)
const io = new Socket(httpServer) 

const containerFiles = new ContainerFiles();
const containerMemory = new ContainerMemory()
//--------------------------------------------
// configuro el socket

io.on('connection', socket => {
    //productos
    products = containerFiles.listarAll()
    socket.emit('productos', products)
    
    socket.on('producto', datat =>{
        containerFiles.guardar(datat)

        io.sockets.emit('productos', products)
    })
      

    
    //mensajes
    socket.emit('mensajes', containerMemory.listarAll())
    
    socket.on('message', data =>{
        containerMemory.guardar(data)
       
        io.sockets.emit('mensajes', containerMemory.listarAll())
    })

    
});

//--------------------------------------------
// agrego middlewares

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static('public'))

//--------------------------------------------
// inicio el servidor

const PORT = 8080
const connectedServer = httpServer.listen(PORT, () => {
    console.log(`Servidor http escuchando en el puerto ${connectedServer.address().port}`)
})
connectedServer.on('error', error => console.log(`Error en servidor ${error}`))
