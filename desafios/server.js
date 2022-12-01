const express = require ('express')
const classProductos = require('./desafio2')

const app = express();
const PORT = 3000

const prods = new classProductos('stock.txt')

app.get('/productos', async (req,res)=>{

    const stock = await prods.getAll()
    res.send({Productos: stock});
})

app.get('/random', async (req,res) => {
    const prods = await pords.getAll()
    const random = parseInt(Math.random() *prods.length)
    res.send({Productos: prods[random]})
})


const server = app.listen(PORT, () => {
    console.log(`Servidor Http escuchado en el puerto ${PORT}`);
});

server.on('error', (error)=> {  
    console.log('Error', error)
}); 