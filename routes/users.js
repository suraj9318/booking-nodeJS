import express from 'express';
import { deleteUser, getAllUsers, getUser, updateUser } from '../controllers/User.js';
import { verifyAdmin, verifyToken, verifyUser } from '../utils/verifyToken.js';

const router = express.Router();


// router.get('/checkauthenticaton',verifyToken,(req,res,next)=>{
//     res.send("hello user, you are logged in")
// })


// router.get('/checkUser/:id',verifyUser,(req,res,next)=>{
//     res.send("hello user, you can delete")
// })

// router.get('/checkAdmin/:id',verifyAdmin,(req,res,next)=>{
//     res.send("hello user, you can delete all ")
// })



router.put('/:id', verifyUser,updateUser)

router.delete('/:id',verifyUser,deleteUser)

router.get('/:id',verifyUser,getUser)

router.get('/',verifyAdmin, getAllUsers)


export default router;