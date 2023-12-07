import { Router } from "express";
import { uploader } from '../uploader.js'
import { ProductController } from '../controllers/product.controller.mdb.js'
/* import { productManager } from "../app.js"; */


const productsRouter = Router()
const controller = new ProductController()

productsRouter.get('/', async (req, res) => {
    const products = await controller.getProducts()
    res.status(200).send({ status: 'OK', data: products })
})

/* para agregar imagen miniatura */
productsRouter.post('/', uploader.single('thumbnail'), async (req, res) => {
    if (!req.file) return res.status(400).send({ status: 'FIL', data: 'File could not be uploaded' })

    const { name, price, description, category, stock } = req.body
    if (!name || !price || !description || !category || !stock) {
        return res.status(400).send({ status: 'ERR', data: 'Required fields are missing' })
    }

    const newContent = {
        name,
        price,
        description,
        category,
        /* thumbnail: req.file.filename, */
        stock
    }

    const result = await controller.addProduct(newContent)
    res.status(200).send({ status: 'OK', data: result })
})

router.put('/:id', async (req, res) => {
    try {
        const productId = req.params;
        const updatedFields = req.body;

        const updatedProduct = await controller.updateProduct(productId, updatedFields);

        res.status(200).send({ status: 'OK', data: updatedProduct });
    } catch (err) {
        res.status(500).send({ status: 'ERR', data: err.message });
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const productId = req.params;

        await controller.deleteProduct(productId);

        res.status(204).send();
    } catch (err) {
        res.status(500).send({ status: 'ERR', data: err.message });
    }
});

export default productsRouter


/* productsRouter.get('/', async (req, res) => {
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
        const products =  await productManager.getProductById(pid)
        res.json(products)
    } catch (error) {
        console.log(error);
        res.send(`Product ${pid} Not Received`)
    }
})

productsRouter.post('/', async (req, res) => {
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

export { productsRouter } */