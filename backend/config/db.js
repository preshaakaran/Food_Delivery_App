import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://karanpresha:admin@cluster0.ojfsy.mongodb.net/food_delivery').then(()=>console.log("Connected to MongoDB"));


  
};