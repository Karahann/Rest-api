const mongoose = require("mongoose");

const connectDatabase = ()=> {
    mongoose.connect(process.env.MONGO_URI)
    .then(()=> {
        console.log("MongoDb Connection Successfull");
    })
    .catch(err=> {
        console.log(err);
    });
};

module.exports = connectDatabase;
