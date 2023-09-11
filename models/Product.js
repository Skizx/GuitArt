const { Schema, model, models } = require("mongoose");

// Schema produit
const ProductSchema = new Schema({
    title: {type: String, required: true},
    description: String,
    price: {type: Number, required: true},
    images: {type: [String]},
});

export const Product = models.Product || model('Product', ProductSchema);