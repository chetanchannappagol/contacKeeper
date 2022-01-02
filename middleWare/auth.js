const jwt = require('jsonwebtoken');
const config = require('config');

module.exports = function(req,res,next){
    //get token from the global env
    const token = req.header('x-auth-token');

    //check if not token 
    if(!token){
       return res.status(401).json({msg:'token not availabe,so autharization denied'});
    }

    try {
        const decoded = jwt.verify(token,config.get('jwtToken'));
        req.user = decoded.user;
        next()
    } catch (error) {
        console.log(error.message)
        res.status(401).json({msg:'token not valid'})
    }
}