const sendJwtToClient = (user,res)=>{

    const token = user.generateJwtFromUser();

    const {JWT_COOKIE,NODE_ENV} = process.env;

    return res
    .status(200)
    .cookie("access_token",token,{
        httpOnly : true,
        expiers : Date(Date.now()+ parseInt(JWT_COOKIE)*1000),
        secure : NODE_ENV === "development" ? false : ture
    })
    .json({
        success : true,
        access_token : token,
        data : {
            name : user.name,
            email : user.email
        }
    });

};

module.exports = sendJwtToClient;