import express from 'express';
import mongoose from 'mongoose';
import Hotel from '../models/Hotel.js';
const router = express.Router();

// CREATE

router.post('/',async (req,res)=>{
    const newHotel = new Hotel(req.body)
    try {
        const saveHotel = await newHotel.save()
        res.status(201).json(saveHotel);
    } catch (error) {
        res.status(500).json(err)
    }
})

//UPDATE
router.put('/:id',async (req,res)=>{
    try {
        const updateHotel = await Hotel.findByIdAndUpdate(req.params.id,{$set : req.body}, {new : true} )
        res.status(201).json(updateHotel);
    } catch (error) {
        res.status(500).json(err)
    }
})


//DELETE

router.delete('/:id',async (req,res)=>{
    try {
         await Hotel.findByIdAndDelete(req.params.id)
        res.status(200).json({msg : 'hotel has been deleted !!'});
    } catch (error) {
        res.status(500).json(err)
    }
})


//GET

router.get('/:id',async (req,res)=>{
    try {
        const hotel = await Hotel.findById(req.params.id )
        res.status(200).json(hotel);
    } catch (error) {
        res.status(500).json(err)
    }
})



//GET ALL
router.get('/',async (req,res)=>{
    try {
        const getAllHotels = await Hotel.find()
        res.status(200).json(getAllHotels);
    } catch (error) {
        res.status(500).json(err)
    }
})


export default router;