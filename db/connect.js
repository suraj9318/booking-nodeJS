import mongoose from "mongoose";

const connect = async(url) =>{
    try {
        await mongoose.connect(url);
        console.log('Connected to mongoDB ...')
    } catch (error) {
        throw error ;
    }
}

export default connect
