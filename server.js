const express = require("express");
const dotenv = require("dotenv");
const res = require("express/lib/response");
const connectDatabase = require("./helpers/database/connectDatabase");
const customErrorHandler = require("./middlewares/errors/customErrorHandler");
const routers = require("./routers/index");



dotenv.config({
    path: "./config/env/config.env"
});

connectDatabase();

const app = express();

const PORT = process.env.PORT;

app.use("/api",routers);

app.use(customErrorHandler);

app.listen(PORT,()=>{
    console.log("server started: "+ PORT+ " "+ process.env.NODE_ENV);
});



