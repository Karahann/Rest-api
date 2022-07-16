const CustomError = require("../helpers/error/customError");
const asyncErrorWrapper = require("express-async-handler");
const User = require("../models/user");


const getSingleUser = asyncErrorWrapper(async(req,res,next)=>{
    const {id}=req.params;
    const user = await User.findById(id);

    return res.status(200)
    .json({
        success : true,
        data : user
    });


});

getAllUsers = asyncErrorWrapper(async(req,res,next)=>{
    const users = await User.find();
    return res.status(200)
    .json({
        success : true,
        data : users
    });
});

module.exports = {
    getSingleUser,
    getAllUsers
};

