const CustomError = require("../../helpers/error/customError");

const customErrorHandler = (err,req,res,next)=> {

    let customError = err;

    if (err.name === "SytaxError") {
        customError = new CustomError("Unexpected Syntax",400);
    }
    if (err.name === "ValidationError") {
        customError = new CustomError(err.message,400);
    }
    if (err.code ===11000) {
        customError = new CustomError("Duplicate Key Found : Check Your Input",400);
    }
    if (err.name === "CastError") {
        customError = new CustomError("Please Provide a Valid Id",400);
    }

    res
    .status(customError.status || 500)
    .json({
        success : false,
        message : customError.message || "Internal Server Error"
    });
};

module.exports = customErrorHandler;