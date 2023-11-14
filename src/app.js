import express from 'express'
import { ProductManager } from './productManager.js'
import { CartManager } from './cartManager.js'
import { productsRouter } from './routes/products.routes.js'
import { cartsRouter } from './routes/carts.routes.js'

const PORT = 8080

const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))


export const productManager = new ProductManager
export const cartManager = new CartManager

app.use('/api/products', productsRouter)
app.use('/api/carts', cartsRouter)

app.listen(PORT, (req,res) =>{
    console.log(`server listening from port ${PORT}`)
})
