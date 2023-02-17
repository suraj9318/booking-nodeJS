import mongoose from "mongoose";

export const connect = async(url) =>{
    try {
        await mongoose.connect(url);
        console.log('Connected to mongoDB ...')
    } catch (error) {
        throw error ;
    }
}

module.exports = connect;
