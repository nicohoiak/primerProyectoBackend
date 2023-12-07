import { Router } from 'express'
import { CartController } from '../controllers/cart.controller.mdb.js'

const router = Router()
const controller = new CartController()

router.post('/', async (req, res) => {
    try {
        const newCart = await controller.createCart(req.body);
        res.status(201).send({ status: 'OK', data: newCart });
    } catch (err) {
        res.status(500).send({ status: 'ERR', data: err.message });
    }
});

// Get a specific cart by ID
router.get('/:id', async (req, res) => {
    try {
        const cart = await controller.getCartById(req.params.id);
        res.status(200).send({ status: 'OK', data: cart });
    } catch (err) {
        res.status(500).send({ status: 'ERR', data: err.message });
    }
});

// Update a cart by ID
router.put('/:id', async (req, res) => {
    try {
        const updatedCart = await controller.updateCart(req.params.id, req.body);
        res.status(200).send({ status: 'OK', data: updatedCart });
    } catch (err) {
        res.status(500).send({ status: 'ERR', data: err.message });
    }
});


router.delete('/:id', async (req, res) => {
    try {
        await controller.deleteCart(req.params.id);
        res.status(204).send();
    } catch (err) {
        res.status(500).send({ status: 'ERR', data: err.message });
    }
});

export default router;
