const express = require("express");
const {askNewQuestion,getAllQuestion,getSingleQuestion,editQuestion,deleteQuestion,likeQuestion,undoLikeQuestion}= require("../controllers/question");
const {getAccessToRoute,getQuestionOwnerAccess} = require("../middlewares/authorization/auth");
const { checkQuestionExist } = require("../middlewares/database/databaseErrorHelpers");

const router = express.Router();

router.get("/:id/like",[getAccessToRoute,checkQuestionExist],likeQuestion);
router.get("/:id/undo_like",[getAccessToRoute,checkQuestionExist],undoLikeQuestion);
router.get("/",getAllQuestion);
router.get("/:id",checkQuestionExist,getSingleQuestion);
router.post("/ask",getAccessToRoute,askNewQuestion);
router.put("/:id/edit",[getAccessToRoute,checkQuestionExist,getQuestionOwnerAccess],editQuestion);
router.delete("/:id/delete",[getAccessToRoute,checkQuestionExist,getQuestionOwnerAccess],deleteQuestion);

module.exports = router;