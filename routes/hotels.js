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
//GET
//GET ALL

export default router;