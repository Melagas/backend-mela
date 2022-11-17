class User {
    constructor(name, surname, books, pets) {
        this.name = name,
            this.surname = surname,
            this.books = books,
            this.pets = pets
    }
    getFullName(){
        return `El nombre de usuario completo es ${this.name} ${this.surname}`
    }
    addMascotas(pet){
        return user.pets.push(pet)
    }
    countMascotas(){
        return `${user.pets.length}`
    }
    addBook(book,author){
        return user.books.push({names:book,author:author});
    }
    getBookNames(){
        return this.books.map(book=>book.names);
        }
}

const user = new User("Gaston", "Mela",
    [{
            "names": "arboles nativos",
            "author": "jose"
        },
        {
            "names": "comida saludable",
            "author": "juan"
        },
        {
            "names": "islas misteriosas",
            "author": "pedro"
        }
    ],
    ["perro", " gato", " pez"]);

user.addBook('habia una vez','tomas');
user.addMascotas('hamster')

console.log(user.getFullName());
console.log(user.countMascotas());
console.log(user.getBookNames());



