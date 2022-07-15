const sendJwtToClient = (user,res)=>{

    const token = user.generateJwtFromUser();

    const {JWT_COOKIE,NODE_ENV} = process.env;

    return res
    .status(200)
    .cookie("access_token",token,{
        httpOnly : true,
        expiers : Date(Date.now()+ parseInt(JWT_COOKIE)*1000*60),
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
const isTokenIncluded = (req)=>{
    console.log("---------------");

    console.log(req.headers.authorization);
    console.log(req.headers.authorization.startsWith("Bearer:"));
    console.log("---------------");

    return (
        req.headers.authorization && req.headers.authorization.startsWith('Bearer:')
    );
};

const getAccessTokenFromHeader = (req) =>{
    const authorization = req.headers.authorization;
    const access_token = authorization.split(" ")[1];
    return access_token;
}

module.exports = {
    sendJwtToClient,
    isTokenIncluded,
    getAccessTokenFromHeader
};