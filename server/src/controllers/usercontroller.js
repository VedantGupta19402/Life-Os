const usermodel = require("../models/usermodel")
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const crypto = require("crypto");
const firebaseAuth = require("../lib/firebase-admin");

//register user
async function registeruser(req, res){

    const {name, email, password} = req.body;

    const emailAlreadyExists = await usermodel.findOne({email});

    if(emailAlreadyExists){
        return res.status(400).json({
            message: "email already exists"
        });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await usermodel.create({
        name: name,
        email: email,
        password: hashedPassword
    });

    const token = jwt.sign(
        {
            id: user._id,
        },
        process.env.JWT_SECRET
    );

    res.cookie("userToken", token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "lax",
    });

    res.status(200).json({
        message: "user registered successfully",
        user: {
            id: user._id,
            name: user.name,
            email: user.email,
        },
    });
}

//login user
async function loginuser(req, res){

    const {email, password} = req.body;

    const user = await usermodel.findOne({email});

    if(!user){
        return res.status(400).json({
            message: "username or password does not match"
        });
    }

    const passwordMatch = await bcrypt.compare(
        password,
        user.password
    );

    if(!passwordMatch){
        return res.status(400).json({
            message: "username or password does not match"
        });
    }

    const token = jwt.sign(
        {
            id: user._id,
        },
        process.env.JWT_SECRET
    );

    res.cookie("userToken", token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "lax",
    });

    res.status(200).json({
        message: "user logged in successfully",
        user: {
            id: user._id,
            name: user.name,
            email: user.email,
        },
    });
}

//logout user
function logoutUser(req, res){

    res.clearCookie("userToken");

    res.status(200).json({
        message: "user logged out successfully",
    });
}
async function googleLogin(req, res) {
    const { idToken } = req.body;

    if (!idToken) {
        return res.status(400).json({
            message: "firebase id token is required"
        });
    }

    let decodedToken;

    try {
        decodedToken = await firebaseAuth.verifyIdToken(idToken);
    } catch (error) {
        return res.status(401).json({
            message: "invalid firebase token",
        });
    }

    if (!decodedToken.email) {
        return res.status(400).json({
            message: "firebase account email is required"
        });
    }

    if (!process.env.JWT_SECRET) {
        return res.status(500).json({
            message: "authentication is not configured"
        });
    }

    try {
        let user = await usermodel.findOne({ email: decodedToken.email });

        if (!user) {
            const generatedPassword = crypto.randomBytes(32).toString("hex");
            const hashedPassword = await bcrypt.hash(generatedPassword, 10);

            user = await usermodel.create({
                name: decodedToken.name || decodedToken.email.split("@")[0],
                email: decodedToken.email,
                password: hashedPassword
            });
        }

        const token = jwt.sign(
            {
                id: user._id,
            },
            process.env.JWT_SECRET
        );

        res.cookie("userToken", token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: "lax",
        });

        res.status(200).json({
            message: "user logged in successfully",
            user: {
                id: user._id,
                name: user.name,
                email: user.email,
            },
        });
    } catch (error) {
        res.status(500).json({
            message: "google authentication failed"
        });
    }
}



module.exports = {
    registeruser,
    loginuser,
    logoutUser,
    googleLogin
}
