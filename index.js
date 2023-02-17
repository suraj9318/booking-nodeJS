import express from 'express';
import mongoose from 'mongoose';
const app = express();
import dotenv from 'dotenv'
dotenv.config()


// db connection 
const connect = async() =>{
    try {
        await mongoose.connect(process.env.MONGO);
        console.log('Connected to mongoDB ...')
    } catch (error) {
        throw error ;
    }
}





app.listen(8080,()=>{
    connect();
    console.log('Connected to backend ...')
})
