const path = require("path");

const options = {
    mariaDB: {
        client:"mysql",
        connection:{
            host:"127.0.0.1",
            user:"root",
            password:"",
            database:"sessiondb"
        }
    },
    sqliteDB:{
        client:"sqlite",
        connection:{
            filename:path.join(__dirname, "../DB/chatdb.sqlite")
        },
        useNullAsDefault:true
    },
    mongoDB:{
        mongoUrlSessions:"mongodb+srv://Melagas:Mendiolaza16$@cluster0.mgjwsbe.mongodb.net/sessionDB?retryWrites=true&w=majority"
    }
}

module.exports = {options};