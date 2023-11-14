import { Router } from "express";
import { productManager } from "../app.js";

const productsRouter = Router()


productsRouter.get('/', async (req, res) => {
    try {
        const { limit } = req.query;
        const products =  await productManager.getProducts()

        if (limit) {
            const limitedProducts = products.slice(0, limit)
            return res.json(limitedProducts)
        }

        return res.json(products)

    } catch (error) {
        console.log(error);
        res.send('Products Not Received')

    }
})

productsRouter.get('/:pid', async (req, res) => {
    const {pid} = req.params;
    try {
        /* const {pid} = req.params */
        const products =  await productManager.getProductById(pid)
        res.json(products)
    } catch (error) {
        console.log(error);
        res.send(`Product ${pid} Not Received`)
    }
})

productsRouter.post('/', async (res, res) => {
    try {
        const { title, description, price, thumbnail, code, stock, status, category } = req.body
        const response = await productManager.addProduct({ title, description, price, thumbnail, code, stock, status, category })
        res.json(response)
    } catch (error) {
        console.log(error);
        res.send('Product Not Added')
    }
})

productsRouter.put('/:pid', async (req, res) => {
    const {pid} = req.params;

    try {
        const { title, description, price, thumbnail, code, stock, status, category } = req.body
        const response = await productManager.updateProduct({ title, description, price, thumbnail, code, stock, status, category })
        res.json(response)
    } catch (error) {
        console.log(error);
        res.send(`Product ${pid} Not Modified`)
    }
})

productsRouter.delete('/', async (req, res) => {
    const { id} = req.params;
    try {
        await productManager.deleteProduct(id)
        res.send (`Product ${pid} Removed`)
    } catch (error) {
        
    }
})

export { productsRouter }