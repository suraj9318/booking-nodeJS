import mongoose from "mongoose";

const Roomchema = mongoose.Schema({
    title : {
        type : String,
        required : true,
    },
    price : {
        type : Number,
        required : true,
    },
    maxPeople : {
        type : Number,
        required : true,
    }, 
    desc : {
        type : String,
        required : true,
    },
    roomNumbers : [{number : Number, unavailableDates: {type : [Date]}}]


},{
    timestamps : true
})

const Room = mongoose.model('Room',Roomchema)

export default Room;