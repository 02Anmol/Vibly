import express from 'express';
import { signIn, signUp } from '../controllers/auth.controllers.js';

const authRouter = express.Router();

authRouter.post("/signup",signUp)
authRouter.post("/signin", signIn);
export default authRouter;