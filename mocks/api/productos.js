import Products from '../container/Products.js'
import { generatorProduct } from '../utils/generatorProduct.js'

class ApiProductsMock extends Products {
   constructor() {
       super()
   }

   popular(cant = 5) {
       const nuevos = []
       for (let i = 1; i <= cant; i++) {
           const nuevoUsuario = generatorProduct()
           const guardado = this.guardar(nuevoUsuario)
           nuevos.push(guardado)
       }
       return nuevos
   }
}

export default ApiProductsMock
