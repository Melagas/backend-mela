import mongoose from 'mongoose';

const estudianteCollection = 'estudiantes';

const EstudianteSchema = new mongoose.Schema(
    {
        nombre:{ type: String, require: true, max:100},
        apellido:{ type: String, require: true, max:100},
        edad:{ type: Number, require: true, max:100},
        dni:{type: String, require: true, unique: true},
        curso:{type: String, require: true, max:10},
        nota:{type: Number, require: true, max:10}
    }
)


export const estudiantes = mongoose.model(estudianteCollection, EstudianteSchema);