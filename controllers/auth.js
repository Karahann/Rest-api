
const User = require("../models/user");
const CustomError = require("../helpers/error/customError");


const register = async (reqi,res,next)=>{
    const name = "Karahannnnnnn";
    const email = "karahannnn@gmail.com";
    const password = "123456";

    try {
        const user = await User.create({
            name,
            email,
            password
        });
    
        res
        .status(200)
        .json({
            success:true,
            data : user
        });
        
    } catch (err) {
        return next(err);
    }
};

module.exports = {
    register
};