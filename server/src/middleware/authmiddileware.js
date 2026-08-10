const jwt = require("jsonwebtoken");

async function authMiddleware(req, res, next) {

    try {

        const token = req.cookies.userToken;

        if(!token){
            return res.status(401).json({
                message: "user not authenticated"
            });
        }

        const decoded = jwt.verify(
            token,
            process.env.JWT_SECRET
        );

        req.user = decoded;

        next();

    } catch(error) {

        return res.status(401).json({
            message: "invalid or expired token"
        });

    }

}

module.exports = authMiddleware;