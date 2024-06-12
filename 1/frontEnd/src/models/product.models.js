import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema({
    description: {
        required: true,
        typr: String
    },
    name:{
        required: true,
        type: String
    },
    producImage: {
        type: String,

    },
    price: {
        type: Number,
        default: 0 
    }, 
    stock: {
        default: 0,
        type: Number
    },
    category: {
        type: mongoose.Schema.types.ObjectId,
        ref: "Categoy"
    },
    owner: {
        type: mongoose.Schema.types.ObjectId,
        ref: "User"
    }
},{timestamp: true})

export const Product = mongoose.model("Product", ProductSchema )