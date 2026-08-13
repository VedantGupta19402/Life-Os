const express = require('express');
const router = express.Router();
const userController = require('../controllers/usercontroller');

router.post('/register', userController.registeruser);
router.post('/login', userController.loginuser);
router.get('/logout', userController.logoutUser);
router.post("/google", userController.googleLogin);


module.exports = router;  