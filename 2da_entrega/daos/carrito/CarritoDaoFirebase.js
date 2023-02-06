import FirebaseProductCrud from "../../container/ContainerFirebase"

class CarritosDaoFirebase extends FirebaseProductCrud {

    constructor() {
        super('carritos')
    }

    async guardar(carrito = { productos: [] }) {
        return super.guardar(carrito)
    }
}

export default CarritosDaoFirebase
