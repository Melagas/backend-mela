const express = require ('express')
const Conteiner = require('./desafio2')

const app = express();
const PORT = 3000

const content = new Conteiner ('stock.txt') 

app.get('/products', async (req,res)=>{
    const stock = await content.getAll()
    console.log(stock);
    return res.send({Products: stock})
}) 

app.get('/random', async (req,res) => {
    const stock = await content.getAll()
    const random = parseInt(Math.random() *stock.length)
    return res.send({Products: stock[random]})
}) 
  

const server = app.listen(PORT, () => {
    console.log(`Servidor Http escuchado en el puerto ${PORT}`);
});

server.on('error', (error)=> {  
    console.log('Error', error)
}); 