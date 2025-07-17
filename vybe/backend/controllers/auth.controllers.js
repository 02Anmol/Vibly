import genToken from '../config/token.js';
import User from '../models/user.model.js';
import bcrypt from 'bcryptjs';

export const signUp = async (req,res)=>{
    try {
        const {name,email,password,userName}=req.body

        const findByEmail = await User.findOne({email})
        if(findByEmail){
            return res.status(400).json({message:"User already exists with this email"})
        }
        const findByUserName = await User.findOne({userName})
        if(findByUserName){
            return res.status(400).json({message:"UserName already exists with this email"})
        }

        if(password.length < 6){
            return res.status(400).json({message:"Password must be at least 6 characters long"})
        }

        const hashedPassword = await bcrypt.hash(password,10)

        const user = await User.create({
            name,
            email,
            password:hashedPassword,
            userName
        })

        const token = await genToken(user._id)
        res.cookie("token",token,{
            httpOnly:true,
            maxAge:10*365*24*60*60*1000, // 10 years
            secure:false,
            sameSite:"Strict"
        })

        return res.status(201).json(user)

    } catch (error) {
        return res.status(500).json({message:`User creation failed ${error}`});
    }
}



export const signIn = async (req,res)=>{
    try {
        const {password,userName}=req.body

        // const findByEmail = await User.findOne({email})
        
        const user = await User.findOne({userName})
        if(!user){
            return res.status(400).json({message:"User not found"})
        }

        const isMatch = bcrypt.compare(password, user.password)

        if(!isMatch){
            return res.status(400).json({message:"Invalid Password"})
        }

        const token = await genToken(user._id)
        res.cookie("token",token,{
            httpOnly:true,
            maxAge:10*365*24*60*60*1000, // 10 years
            secure:false,
            sameSite:"Strict"
        })

        return res.status(200).json(user)

    } catch (error) {
        return res.status(500).json({message:`SignIn error ${error}`});
    }
}

export const signOut = async (req,res)=>{
    try {
        res.clearCookie("token")
        return res.status(200).json({message:"SignOut successful"})
    } catch (error) {
        return res.status(500).json({message:`SignOut error ${error}`});
    }
}