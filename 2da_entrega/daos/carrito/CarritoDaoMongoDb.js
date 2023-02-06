import ContenedorMongoDb from "../../container/ContainerMongoDb";

class CarritosDaoMongoDb extends ContenedorMongoDb {

    constructor() {
        super('carritos', {
            products: { type: [], required: true }
        })
    }

    async guardar(carrito = { products: [] }) {
        return super.guardar(carrito)
    }
}

export default CarritosDaoMongoDb
