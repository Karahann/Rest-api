
const User = require("../models/user");
const CustomError = require("../helpers/error/customError");
const asyncErrorWrapper = require("express-async-handler");
const sendJwtToClient = require("../helpers/authorization/sendJwtToClient");


const register = asyncErrorWrapper( async (req,res,next)=>{

    const {name,email,password,role} = req.body;

    const user = await User.create({
        name,
        email,
        password,
        role
    });
  
    sendJwtToClient(user,res);

    // const token = user.generateJwtFromUser();
    
    // res
    // .status(200)
    // .json({
    //     success:true,
    //     data : user
    // });

});

module.exports = {
    register
};