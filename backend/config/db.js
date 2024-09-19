import mongoose from "mongoose";

export const connectDB = async() => {
    await mongoose.connect('mongodb+srv://ubaidcaliberz:AsraUbaid@cluster0.cycss.mongodb.net/food-del').then(()=>console.log("DB Connected"));
}