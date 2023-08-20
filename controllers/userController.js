const users= require("../models/userModel");
const asyncHandler = require("express-async-handler");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken")
//@desc post api register a user
//@route GET /api/users/register
//access public
const registerUser= asyncHandler(async (req,res)=>{
    const {username,email,password}=req.body;
    if(!username || !email || !password){
        res.status(400);
        throw new Error("All fields are mandatory");
    }
    const userAvalible = await users.findOne({email});
    if(userAvalible){
        res.status(400);
        throw new Error("This email is already taken");
    }
//creating hashpassword
const hashpassword= await bcrypt.hash(password,10);
//console.log("the hashpasword is", hashpassword);
const user = users.create({
    username,
    email,
    password: hashpassword,
})
if(user){
    res.status(201).json({_id: user.id, email: user.email})
}
else{
    res.status(400);
    throw new Error("User data is not valid");
}
});

//@desc post api register a user
//@route POST /api/users/login
//access public
const loginUser= asyncHandler(async (req,res)=>{
    const {email,password}= req.body;
    if(!email || !password){
        res.status(400);
        throw new Error("Email and password required");
    }
    const user = await users.findOne({email});
    if(user && (await bcrypt.compare(password,user.password))){
        const accessToken = jwt.sign({
            user:{
                username: user.username,
                email: user.email,
                id: user.id,
            },

        },process.env.ACCESS_TOKEN,{expiresIn:"1m"}
        );
        res.status(200).json({accessToken});
    }else{
        res.status(401);
        throw new Error("Email and password is not valid");
    }
    


    res.json({message: "user logged in"});
});

//@desc post api register a user
//@route GET /api/users/current
//access private
const currentUser= asyncHandler(async (req,res)=>{
    res.json(req.user);
});
module.exports={registerUser,loginUser,currentUser}