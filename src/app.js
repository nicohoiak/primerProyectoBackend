import express from 'express'
import mongoose from 'mongoose'

import { __dirname } from './utils.js'
/* import { ProductManager } from './productManager.js'
import { CartManager } from './cartManager.js' */
import viewsRouter from './routes/views.routes.js'
import productsRouter from './routes/products.routes.js'
import cartsRouter from './routes/carts.routes.js'
import ordersRouter from './routes/orders.routes.js'

const PORT = 8080
const MONGOOSE_URL = 'mongodb://localhost:27017'
const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.engine('handlebars', handlebars.engine())
app.set('views', `${__dirname}/views`)
app.set('view engine', 'handlebars')

/* 
export const productManager = new ProductManager
export const cartManager = new CartManager */

app.use('/api/products', productsRouter)
app.use('/api/carts', cartsRouter)
app.use('/', viewsRouter)
app.use('/api/orders', ordersRouter)

app.use('/static', express.static(`${__dirname}/public`))

try {
    await mongoose.connect(MONGOOSE_URL)
    app.listen(PORT, () => {
        console.log(`server listening from port ${PORT}`)
    })
} catch (error) {
    console.log(`error initializing server (${error.message})`)
}
