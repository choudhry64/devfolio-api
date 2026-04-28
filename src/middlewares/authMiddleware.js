const jwt = require("jsonwebtoken");

const auth = (req, res, next) => {
    try{
    const token = req.headers.authorization.split(" ")[1];

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    if (decoded){
        req.user = {userId : decoded.userId};
        next();
    }else {
        res.status(404).json({
            message : "Wrong credentials"
        })
    }
} catch(error){
    res.json({
        message : error.message
    })
}
}
module.exports = auth;
