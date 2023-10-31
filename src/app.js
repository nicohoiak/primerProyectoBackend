import fs from 'fs'

/* const fs = require('fs').promises; */

class ProductManager {

    constructor(path) {
        this.path = path;
        this.currentId = 0;
        this.products = [];
    }

    async addProduct(product) {
        this.currentId = this.currentId + 1;
        product.id = this.currentId;
        this.products.push(product); 
        const data = JSON.stringify(this.products, null, 2);
        await fs.writeFile(this.path, data);
    }

    async getProducts() {
        const data = await fs.readFile(this.path, 'utf-8');
        this.products = JSON.parse(data);
        return this.products;
    }

    async getProductById(id) {
        const data = await fs.readFile(this.path, 'utf-8');
        const productsJson = JSON.parse(data);
        const product = productsJson.find(item => item.id === id);
        if (!product) {
            console.log('Producto no encontrado');
        }
        return product;
    }

    async updateProduct(id, newData) {
        const data = await fs.readFile(this.path, 'utf-8');
        const productsJson = JSON.parse(data);
        
        const index = productsJson.findIndex(item => item.id === id);
        if (index !== -1) {
            productsJson[index] = { ...productsJson[index], ...newData };
            const updatedData = JSON.stringify(productsJson, null, 2);
            await fs.writeFile(this.path, updatedData);
        } else {
            console.log('Producto no encontrado');
        }
    }

    async deleteProduct(id) {
        const data = await fs.readFile(this.path, 'utf-8');
        const productsJson = JSON.parse(data);

        const index = productsJson.findIndex(item => item.id === id);
        if (index !== -1) {
            productsJson.splice(index, 1);
            const updatedData = JSON.stringify(productsJson, null, 2);
            await fs.writeFile(this.path, updatedData);
        } else {
            console.log('Producto no encontrado');
        }
    }
}

const manager1 = new ProductManager('./products.json');
const newProduct = {
    title: 'Producto 1',
    price: 1000
}

manager1.addProduct(newProduct);
manager1.updateProduct(1, { title: 'Producto Actualizado', price: 1500 });


/* import fs from 'fs'

class ProductManager {

    constructor(path) {
        this.path = path
        this.currentId = 0
        this.products = []
    }

    async addProduct(product) {
        this.currentId = this.currentId + 1
        product.id = this.currentId
        this.product.push
        // realizar stringify
        await fs.promises.writeFile

    }

    async getProducts() {
        await fs.promises.readFile
        // realizar el parse a objeto json
        return this.products

    }

    async getProductById(id) {
        await fs.promises.readFile
        //realizar el parse a objeto json
        const product = productsJson.find (item => item.id === id )
            if (error){
                console.log
            }

    }

    async updateProduct (id,newData) {
        // await fs.promises.readFile
        //realiar el parse a objeto json (productsJson)
        // realizar un findIndex en el array obtenido
        // si findIndex no encuentra nada, devuelve -1
        //productsJson [2] = newData
        await fs.promises.writeFile
    }

    async deleteProduct(id) {
        // await fs.promises.readFile
        //realizar parse a objeto json (productsJson)
        // realizar findIndex () en el array obtenido
        // si findIndex no encuentra nada, devuelve - 1
        // productsJson.splice (index, 1)
    }
}

const manager1 = new ProductManager('./products.json')
const newProduct = {
    title: 'Producto 1',
    price: '1000'

} */

/* manager1.addProduct (newProduct)
manager1.updateProduct(2, {title: 'product 2', price: 2000}) */

