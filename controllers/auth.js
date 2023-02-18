import User from "../models/User.js"
import bcrypt from "bcryptjs"
export const register = async(req,res,next)=>{
    try {
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(req.body.password, salt);

        const newUser =await User.create({
            username : req.body.username,
            email : req.body.email,
            password : hash,
        })
        await newUser.save();
        res.status(201).json({success : true, msg : "User registered successfully."})
    } catch (error) {
        next(error)
    }
}