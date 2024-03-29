import express, { json } from 'express'
import { generatorProduct } from './utils/generatorProduct.js'

    
    const app = express()
    
    app.use(json())
    
    app.use('/api/productos-test', generatorProduct)
    
    const PORT = 8080
    const server = app.listen(PORT, () => {
       console.log(`Servidor escuchando en el puerto ${PORT}`)
    })
    server.on('error', error => console.log(`Error en servidor: ${error}`))
    
    