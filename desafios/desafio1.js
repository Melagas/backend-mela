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
        return usuario.mascotas.push(nuevaMascota)
    }
    countMascotas(){
        return `${usuario.mascotas.length}`
    }
    addBook(){
        return usuario.libros.push({nombres:libro, autor:autor});
    }
    getBookNames(){
        return this.libros.map(libro=>libro.nombres);
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

const libro = ("habia una vez")
const autor = ("tomas")
const nuevaMascota = ("rana");

console.log(usuario.getFullName());
console.log(usuario.addMascotas());
console.log(usuario.countMascotas());
console.log(usuario.addBook());
console.log(usuario.getBookNames());



