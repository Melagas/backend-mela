const express = require ('express')

const app = express();
const PORT = 8070

app.use(express.json())
app.use(express.urlencoded({extended: true }))

app.put("/api/users/:id", (req,res) =>{
    const {idBody,name} = req.body
    const {id} = req.params
    console.log({id,name, idBody});
    res.send({message: {id,name, idBody}});
}); 
const server = app.listen(PORT, () => {
    console.log(`Listening app port ${server.address().port}`);
});

server.on("error", (error) => {  
    console.log("Error===>", error.stack)
}); 