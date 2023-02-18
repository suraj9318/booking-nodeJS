import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv'
import authRouter from './routes/auth.js'
import hotelsRouter from './routes/hotels.js'
import usersRouter from './routes/users.js'
import roomsRouter from './routes/rooms.js'

// 25 min
const app = express();
dotenv.config()



// MIDDLEWARE
app.use(express.json())

app.use("/api/auth", authRouter);
app.use("/api/users", usersRouter);
app.use("/api/hotels", hotelsRouter);
app.use("/api/rooms", roomsRouter);



// db connection 
const connect = async() =>{
    try {
        await mongoose.connect(process.env.MONGO);
        console.log('Connected to mongoDB ...')
    } catch (error) {
        console.log('Not connected to mongoDB ...')
        throw error ;
    }
}



app.listen(8080,()=>{
    connect();
    console.log('Connected to backend ...')
})
