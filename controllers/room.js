import Room from '../models/Room.js'
import Hotel from '../models/Hotel.js'

import {createError} from '../utils/error.js'

export const creatRoom = async (req,res,next)=>{

    const hotelId = req.params.hotelid;
    const newRoom = new Room(req.body)

    try {
        const savedRoom =await newRoom.save();

        try {
            await Hotel.findByIdAndUpdate(hotelId, {$push : {rooms : savedRoom._id}})
        } catch (error) {
            next(error)
        }
        res.status(200).json(savedRoom);
    } catch (error) {
        next(error)
    }
} 




export const updateRoom = async (req,res,next)=>{
    try {
        const updateRoom = await Room.findByIdAndUpdate(req.params.id,{$set : req.body}, {new : true} )
        if(!updateRoom){
            next(createError(404, "Not found"))
        }
        res.status(200).json(updateRoom);
    } catch (error) {
        next(error);
    }
}


export const deleteRoom = async (req, res, next) => {
    const hotelId = req.params.hotelid;
    try {
      await Room.findByIdAndDelete(req.params.id);
      try {
        await Hotel.findByIdAndUpdate(hotelId, {
          $pull: { rooms: req.params.id },
        });
      } catch (err) {
        next(err);
      }
      res.status(200).json("Room has been deleted.");
    } catch (err) {
      next(err);
    }
  };

export const getRoom = async (req,res,next)=>{
    try {
        const room = await Room.findById(req.params.id )
        res.status(200).json(room);
    } catch (error) {
        next(error);
    }
}

export const getAllRooms = async (req,res,next)=>{
    try {
        const getAllRooms = await Room.find()
        res.status(200).json(getAllRooms);
    } catch (error) {
       next(error)
    }
}



export const updateRoomAvailability = async (req, res, next) => {
    try {
      await Room.updateOne(
        { "roomNumbers._id": req.params.id },
        {
          $push: {
            "roomNumbers.$.unavailableDates": req.body.dates
          },
        }
      );
      res.status(200).json("Room status has been updated.");
    } catch (err) {
      next(err);
    }
  };


