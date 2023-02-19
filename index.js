import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv'
import authRouter from './routes/auth.js'
import hotelsRouter from './routes/hotels.js'
import usersRouter from './routes/users.js'
import roomsRouter from './routes/rooms.js'
import cookieParser from 'cookie-parser';
// 52:11

const app = express();
dotenv.config()


// MIDDLEWARE
app.use(express.json())
app.use(cookieParser())

app.use("/api/auth", authRouter);
app.use("/api/users", usersRouter);
app.use("/api/hotels", hotelsRouter);
app.use("/api/rooms", roomsRouter);



app.use((err,req,res,next)=>{
    const errorStatus = err.status || 500
    const errorMessage = err.message || ("Something went wrong")
    return res.status(errorStatus).json({
        success : false,
        status : errorStatus,
        message : errorMessage,
        stack : err.stack
    })
})

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
