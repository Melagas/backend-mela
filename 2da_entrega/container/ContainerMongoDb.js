import mongoose from 'mongoose'
import config from '../config.js'

await mongoose.connect(config.mongodb.cnxStr, config.mongodb.options)

const productsArray = [
    {
        title: 'Mouse',
        price: 1000,
        thumbanil: 'image.test'
      },
      {
        title: 'Teclado',
        price: 5000,
        thumbanil: 'image.test'
      },
      {
        title: 'Auriculares',
        price: 3000,
        thumbanil: 'image.test'
      },
]

class ContenedorMongoDb {

    constructor(productColection, schema) {
        this.coleccion = mongoose.model(productColection, schema)
    }

    async getAll() {
        try{
            const productsRead = await model.product.find({});
            console.log(productsRead);
        }catch (error){
            console.log(error);
        }
    }

    async getById() {
        try{
            const productsRead = await model.product.find({id: 1});
            console.log(productsRead);
        }catch (error){
            console.log(error);
        }
    }

    async save() {
        try{
            const newProducts = await model.product.insertMany(productsArray);
            console.log(newProducts);
            // const productSave = new model.product(user);
            // const savedProduct = await productSave.save();
            // console.log(savedProduct);
        }catch (error){
            console.log(error);
        }
    }

    async newId() {
        try{
            const productUpdate = await model.product.updateOne({nombre:'Mouse'},{$set:{id:55}})
            console.log(productUpdate);
        }catch (error){
            console.log(error);
        }
    }

    async deleteById() {
        try{
            const productDelete = await model.product.deleteOne({nombre: 'Tom'})
            console.log(productDelete);
        }catch (error){
            console.log(error);
        }
    }
}

export default ContenedorMongoDb