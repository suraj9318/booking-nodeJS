export const createHotel = async (req,res,next)=>{
    const newHotel = new Hotel(req.body)
    try {
        const saveHotel = await newHotel.save()
        res.status(201).json(saveHotel);
    } catch (error) {
        next(error);
    }
}