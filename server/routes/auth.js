const express = require('express')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const User = require('../models/user')
require('dotenv').config()
const router = express.Router()


const secret = process.env.SECRET

router.post('/register',async (req,res) => {
    try{ 
        // DO PROCESS HERE OR CONTROLLER
        const {username,password} = req.body

        console.log('PASSWORD SHOULD BE',password)
        const hashedPassword = await bcrypt.hash(password,13)
        console.log('PASSWORD HASH SUCCRESSFULLY',hashedPassword)
        // CHECK IF USER IS CREATED
        const existingUser = await User.find({username:username})
        if (existingUser === undefined) {
            throw new Error('User is already existed')
            // return new Error('User is exised');
        }
        const userCreate = await User.create({username:username,password:hashedPassword})
        console.log('USER CREATE SUCCESSFULLY', userCreate)

        return res.json({
            message:'User created successfully',
            data:userCreate
        })
    }catch(e){
        console.log('ERRROR ', e.message)
        return res.status(502).json({message:e?.message ?? 'Something went wrong'})
    }
})

router.post('/login', async (req,res)=> {

    try{

        const {username,password} = req.body
        const existedUser = await User.findOne({username:username})
        if  (!existedUser) {
            throw new Error('User Not found')
        }

        console.log('EXISTED',existedUser)

        const isPasswordMatch = await bcrypt.compare(password,existedUser.password)
        if (!isPasswordMatch) {
            throw new Error('Password is incorrect')
        }

        //Generate JWT
        const token = jwt.sign({ username ,id: existedUser._id}, secret, { expiresIn: "1h" });
        return res.status(201).json({
            'token': token,
            'expiredIn':'1h'
        })

    }catch(e){
        return res.status(502).json({message: e?.message ?? 'Something went wrong'})
    }
    
})

module.exports = router