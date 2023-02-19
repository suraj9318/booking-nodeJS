import Hotel from "../models/Hotel.js";
import { createError } from "../utils/error.js";

export const createHotel = async (req,res,next)=>{
    const newHotel = new Hotel(req.body)
    try {
        const saveHotel = await newHotel.save()
        res.status(201).json(saveHotel);
    } catch (error) {
        next(error);
    }
}


export const updateHotel = async (req,res,next)=>{
    try {
        const updateHotel = await Hotel.findByIdAndUpdate(req.params.id,{$set : req.body}, {new : true} )
        if(!updateHotel){
            next(createError(404, "Not found"))
        }
        res.status(200).json(updateHotel);
    } catch (error) {
        next(error);
    }
}


export const deleteHotel = async (req,res,next)=>{
    try {
        await Hotel.findByIdAndDelete(req.params.id)
       res.status(200).json({msg : 'hotel has been deleted !!'});
   } catch (error) {
        next(error);
   }

}

export const getHotel = async (req,res,next)=>{
    try {
        const hotel = await Hotel.findById(req.params.id )
        res.status(200).json(hotel);
    } catch (error) {
        next(error);
    }
}

export const getAllHotels = async (req,res,next)=>{
    try {
        const getAllHotels = await Hotel.find()
        res.status(200).json(getAllHotels);
    } catch (error) {
       next(error)
    }
}

