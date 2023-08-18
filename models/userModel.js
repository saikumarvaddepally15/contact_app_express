const mongoose=require("mongoose");
const userSchema = mongoose.Schema({
    username: {
        type: String,
        require: [true, "This field is required"],
    },
    email: {
        type: String,
        require: [true, "Email is mandatory"],
        unique: [true,"Email address is already taken"],
    },
    password:{
        type: String,
        require: [true, "password is required"],
    }
},{
    timestamps: true,
});
module.exports=mongoose.model("User",userSchema);