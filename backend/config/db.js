import mongoose from "mongoose";

 export const connectDB = async()=>{
    await mongoose.connect('mongodb+srv://himasha2k:2000@cluster0.7ejye2x.mongodb.net/Food_Delivery_App').then(()=>console.log("DB connected"));
}
