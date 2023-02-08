import faker from "faker";
faker.locale = 'es'


function generatorProduct() {
 return {
   name: faker.name.product(),
   price: faker.price.price(),
   image: faker.image.imageURL(),
 }
}

export { generatorProduct }