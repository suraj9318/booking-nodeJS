import express from 'express';
import { countBycity, countByType, createHotel, deleteHotel, getAllHotels, getHotel, getHotelRooms, updateHotel } from '../controllers/hotel.js';
import { verifyAdmin } from '../utils/verifyToken.js';

const router = express.Router();

// CREATE

router.post('/',verifyAdmin, createHotel)

router.put('/:id',verifyAdmin,updateHotel)

router.delete('/:id',verifyAdmin,deleteHotel)

router.get('/find/:id',getHotel)

router.get('/',getAllHotels)
router.get('/countBycityName',countBycity)
router.get('/countByType',countByType)
router.get('/room/:id',getHotelRooms)


export default router;