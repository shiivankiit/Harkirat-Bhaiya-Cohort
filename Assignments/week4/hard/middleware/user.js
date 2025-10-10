//We need to create a middleware for authentication....
//So here we are verifying the token 
const jwt=require('jsonwebtoken');
const JWT_SECRET="SHDJHUIW";
function userMiddleware(req, res, next) {
    // Implement user auth logic
//1---We are sending token in header.
const token = req.headres.token;
const data = jwt.verify(token,JWT_SECRET);
const username = data.username;
}
module.exports = userMiddleware;