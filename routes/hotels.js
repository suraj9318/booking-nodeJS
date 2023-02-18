import express from 'express';
import { createHotel, deleteHotel, getAllHotels, getHotel, updateHotel } from '../controllers/hotel.js';

const router = express.Router();

// CREATE

router.post('/',createHotel)

router.put('/:id',updateHotel)

router.delete('/:id',deleteHotel)

router.get('/:id',getHotel)

router.get('/',getAllHotels)


export default router;