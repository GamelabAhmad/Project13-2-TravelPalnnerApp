const jwt = require('jsonwebtoken');
require('dotenv').config();

const verifyToken = (req, res, next) => {
    const token = req.cookies.accessToken;

    //cek apakah token nya ada atau tidak
    if (!token) {
        return res.status(401).json({
            success: false,
            message: "Anda tidak berwenang"
        });
    };

    //Jika token ada dan terverifikasi
    jwt.verify(token, process.env.secret,  (error, user) => {
        if (error) {
            return res.status(401).json({
                success: false,
                message: "Token Tidak Valid"
            });
        };

        req.user = user;
        next();

    });


};


const verifyUser = (req,res,next) => {
    verifyToken(req, res , () => {
        if (req.user.id === req.params.id || req.user.role === 0) {
            next();
        }else {
            return res.status(401).json({
                success: false,
                message: "Anda tidak diautentikasi",
            });
        };
    })
}

const verifyAdmin = (req,res,next) => {
    verifyToken(req, res , () => {
        if (req.user.id === req.params.id || req.user.role === 1) {
            next();
        }else {
            return res.status(401).json({
                success: false,
                message: "Anda tidak diautentikasi",
            });
        };
    })
}

module.exports = {
    verifyToken,
    verifyUser,
    verifyAdmin,
    
}