const express = require('express')
const app = express()

const PORT = 8080

const {route} = require('./router')

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static('public'))
app.use('/api/productos', require('./router'))
app.use('/api/carritos', require('./router'))

const server = app.listen(PORT, () => {
    console.log(`Servidor http escuchando en el puerto ${server.address().port}`)
})