import Carts from "../../container/ContainerMem"

class CarritosDaoMem extends Carts {

    async guardar(carrito = { products: [] }) {
        return super.guardar(carrito)
    }
}

export default CarritosDaoMem