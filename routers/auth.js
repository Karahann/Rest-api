const express = require("express");
const {register,login,getUser} = require("../controllers/auth");
const router = express.Router();
const {getAccessToRoute} = require("../middlewares/authorization/auth");

router.post("/register",register);
router.post("/login",login);
router.get("/profile",getAccessToRoute,getUser);


module.exports = router;