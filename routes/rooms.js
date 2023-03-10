import express from 'express';
import { creatRoom, deleteRoom, getAllRooms, getRoom, updateRoom, updateRoomAvailability } from '../controllers/room.js';
const router = express.Router();
import { verifyAdmin } from '../utils/verifyToken.js';

// CREATE

router.post('/:hotelid',verifyAdmin, creatRoom)

router.put('/:id',verifyAdmin,updateRoom)

router.put("/availability/:id", updateRoomAvailability);

router.delete("/:id/:hotelid", verifyAdmin, deleteRoom);

router.get('/:id',getRoom)

router.get('/',getAllRooms)


export default router;