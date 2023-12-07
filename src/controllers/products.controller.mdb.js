import productsModel from '../models/product.model.js'

export class ProductsController {
    constructor() {
    }

    async addProducts(product) {
        try {
            await productsModel.create(product)
            return "Product added"
        } catch (err) {
            return err.message
        }
    }

    async getProducts() {
        try {
            const products = await productsModel.find().lean()
            return products
        } catch (err) {
            return err.message
        }
        
    }

    async getProducts(id) {
        try {
            const product = await productsModel.findById(id)
            return product === null ? 'Product not found' : product
        } catch (err) {
            return err.message
        }
    }

    async getProductsPaginated (page,limit){
        try {
            return await productsModel.paginate(
                {category: 'frutas'},
                {offset: (page * 50) - 50, limit: limit,lean:true}
            )
        } catch (error) {
            return err.message
            
        }
    }

    async updateProducts(id, newContent) {
        try {
            const procedure = await productsModel.findByIdAndUpdate(id, newContent)
            return procedure
        } catch (err) {
            return err.message
        }
    }

    async deleteProducts(id) {
        try {
            const procedure = await productsModel.findByIdAndDelete(id)
            return procedure
        } catch (err) {
            return err.message
        }
    }
}