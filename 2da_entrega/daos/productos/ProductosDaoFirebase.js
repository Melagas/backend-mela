import FirebaseProductCrud from "../../container/ContainerFirebase.js";

class ProductosDaoFirebase extends FirebaseProductCrud {

    constructor() {
        super('productos')
    }
}

export default ProductosDaoFirebase