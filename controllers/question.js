const Question = require("../models/Question");
const CustomError = require("../helpers/error/customError");
const asyncErrorWrapper = require("express-async-handler");

const getAllQuestion = asyncErrorWrapper(async(req,res,next)=>{
    const questions = await Question.find();

    return res.status(200).json({
        success : true,
        data : questions
    });
});

const editQuestion = asyncErrorWrapper(async(req,res,next)=>{

    const {id} = req.params;
    const {title,content} = req.body;

    let question = await Question.findById(id);
    console.log(title);
    
    question.title = title;
    question.content = content;
    question = await question.save();

    res.status(200)
    .json({
        success : true,
        data : question
    });
});

getSingleQuestion = asyncErrorWrapper(async(req,res,next)=>{

    const {id} = req.params;
    const question = await Question.findById(id);
    console.log(question);
    res.status(200)
    .json({
        success : true,
        data : question
    });
});

const askNewQuestion = asyncErrorWrapper(async(req,res,next)=>{
    const information = req.body;

    const question = await Question.create({
        ...information,
        user : req.user.id
    });
    res.status(200)
    .json({
        success : true,
        data : question
    });
});


module.exports = {
    askNewQuestion,
    getAllQuestion,
    getSingleQuestion,
    editQuestion
};