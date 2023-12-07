import mongoose from 'mongoose'

mongoose.pluralize(null)

const collection = 'orders'

const schema = new mongoose.Schema({
    name: { type: String, required: true },
    category: { type: String },
    price: { type: Number, required: true },
    quantity:  { type: Number, required: true },
    date: { type: Date }
})

export default mongoose.model(collection, schema)