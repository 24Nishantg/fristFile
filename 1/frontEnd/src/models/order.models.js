import mongoose from "mongoose";

const orderItemSchema = new mongoose.Schema({
    product:{
        type: mongoose.Schema.types.ObjectId,
        ref: "Product"
    },
    quantity: {
        type: Number,
        required: true
    }

})

const OrderSchema = new mongoose.Schema({
    orderprise: {
        type: Number,
        required: true
    },
    customer: {
        type: mongoose.Schema.types.ObjectId,
        ref: "User"
    },
    oderItem: {
        type: [orderItemSchema]
    },
    address: {
        type: String, 
        required: true

    },
    status:{
        type: String,
        enum: ["PENDING", "CANCELLING","DELIVERED"]
    }
},{timestamp: true})

export const Order = mongoose.model("order", OrderSchema)