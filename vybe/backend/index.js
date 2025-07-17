import express from 'express';
import connectDb from './config/db.js';
import dotenv from 'dotenv';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import authRouter from './routes/auth.routes.js';
import userRouter from './routes/user.routes.js';

dotenv.config();
const app = express();
const port = process.env.PORT || 5000;
app.use(cors({
    origin: "http://localhost:5173",
    withCredentials: true,    
})) 
app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authRouter);
app.use("/api/user", userRouter);


app.listen(port, () =>{
    connectDb()
    console.log(`Server is running on port ${port}`);
})

