const express = require("express");
const router = require("./router");

const PORT = 8080;
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}))
app.use(express.static('files')); 
app.use('/api/products', router);


const server = app.listen(PORT, () => {
         console.log(`Listening app port ${server.address().port}`);
    });
    
server.on("error", (error) => {  
        console.log(`Error ${error}`)
    });  