import express from 'express';
import connectDb from './config/db.js';
import dotenv from 'dotenv';
dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

app.listen(port, () =>{
    connectDb()
    console.log(`Server is running on port ${port}`);
})

