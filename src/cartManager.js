/* import fs from 'fs' */
/* import { v4 as uuidv4 } from 'uuidv4' */
/* 
export class CartManager {
    constructor() {
        this.path = ' cart.json';
        this.carts = [];
    }

    getCarts = async () => {
        const response = await fs.readFile(this.path, 'utf8')
        const responseJSON = JSON.parse(response)
        return responseJSON
    }

    getCartProducts = async (id) => {
        const carts = await this.getCarts()

        const cart = carts.find(cart => cart.id === id)
        if (cart) {
            return cart.products
        } else {
            console.log('Cart Not Found')
        }
    } */

/*     newCart = async () => {
        const id = uuidv4()

        const newCart = { id, products: [] }

        this.carts = await this.getCarts()
        this.carts.push(newCart)

        await fs.watchFile(this.path, JSON.stringify(this.carts))
        return newCart;
    }

    addProductToCart = async (cart_id, product_id) => {
        const carts = await this.getCarts()
        const index = cart.findIndex(cart => cart.id === cart_id)

        if (index != -1) {
            const cartProducts = await this.getCartProducts(cart_id)
            const existingProductIndex = cartProducts.findIndex(product => product.product_id === product_id)
            
            if (existingProductIndex != -1){
                cartProducts[existingProductIndex].quantity = cartProducts[existingProductIndex].quantity + 1  
            
            } else {
                cartProducts.push({product_id, quantity : 1})
            }
            carts[index].products = cartProducts

            await fs.watchFile(this.path, JSON.stringify(carts))
            console.log ('Added Product')
        }else {
            console.log('Cart Not Found')
        }
    }
} */