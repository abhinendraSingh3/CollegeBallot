import express from "express";
const router = express.Router();
import jwtAuthMiddleware from "./../middleware/auth.middleware.js";
import jwt from "jsonwebtoken";
import { registerUser,loginUser,profileView,passChange,handleRefreshToken } from "../controller/auth.controller.js";
import { loginLimiter,registerLimiter } from "../middleware/rateLimiter.js";

//----post method to add login credentials-----

router.post('/signup',registerLimiter,registerUser);

//--------post route for login---------------
router.post('/login',loginLimiter,loginUser)

//------------profile route--------------------
router.get('/profile', jwtAuthMiddleware,profileView)

// ------------password changing route----------
router.put('/profile/password', jwtAuthMiddleware,passChange)

//-----------refresh token-----------------
router.post('/refreshtoken',handleRefreshToken)


export default router;