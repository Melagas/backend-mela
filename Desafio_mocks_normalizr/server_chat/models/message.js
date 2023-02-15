import {mongoose} from 'mongoose';

var Schema = mongoose.Schema;

var MessageSchema = new Schema({
    // message: String,
    // from: String
        author: {
            id: String,
            nombre: String,
            apellido: String,
            edad: Number,
            alias: String,
            avatar: String,
        },
        text: String
})

export default mongoose.model('Message', MessageSchema)

