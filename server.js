const express = require("express");
const dotenv = require("dotenv");
const res = require("express/lib/response");
const connectDatabase = require("./helpers/database/connectDatabase");
const customErrorHandler = require("./middlewares/errors/customErrorHandler");
const routers = require("./routers/index");
const path = require("path");


dotenv.config({
    path: "./config/env/config.env"
});

connectDatabase();

const app = express();

app.use(express.json());

const PORT = process.env.PORT;

app.use("/api",routers);

// Error Handler

app.use(customErrorHandler);

// Static Files
app.use(express.static(path.join(__dirname,"public")));


app.listen(PORT,()=>{
    console.log("server started: "+ PORT+ " "+ process.env.NODE_ENV);
});



