import mongoose from 'mongoose'


const UserSchema = new mongoose.Schema({
    username:{
        Type: String,
        requried: true,
        unique: true,
        lowercase: true
    },
    email:{
        Type: String,
        requried: true,
        unique: true,
        lowercase: true
    },
    password:{
        Type: String,
        requried: true
    }
}, {timestamps: true})

export const User = mongoose.model("User", UserSchema)