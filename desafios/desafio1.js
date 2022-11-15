class Usuario {
    constructor(nombre, apellido, libros, mascotas) {
        this.nombre = nombre,
            this.apellido = apellido,
            this.libros = libros,
            this.mascotas = mascotas
    }
    getFullName(){
        return `El nombre de usuario completo es ${this.nombre} ${this.apellido}`
    }
    addMascotas(){
        return usuario.mascotas.push (" rana")
    }
    countMascotas(){
        return `La cantidad de mascotas es de ${usuario.mascotas.length} : ${this.mascotas}`
    }
    addBook(){
        return usuario.libros.push (nuevoLibro)
    }
    getBookNames(){
        return this.libros.map(function(libro){
            return libro.nombres
        })
    }
}

const usuario = new Usuario("Gaston", "Mela",
    [{
            "nombres": "arboles nativos",
            "autor": "jose"
        },
        {
            "nombres": "comida saludable",
            "autor": "juan"
        },
        {
            "nombres": "islas misteriosas",
            "autor": "pedro"
        }
    ],
    ["perro", " gato", " pez"]);

const nuevoLibro = {nombres: "habia una vez", autor: "tomas" }

console.log(usuario.getFullName());
console.log(usuario.addMascotas());
console.log(usuario.countMascotas());
console.log(usuario.addBook());
console.log(usuario.getBookNames());



