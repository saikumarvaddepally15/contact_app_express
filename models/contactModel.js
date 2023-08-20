const mongoose=require("mongoose");
const contactSchema= mongoose.Schema({
    user_id:{
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "User",
    },
    name:{
        type: String,
        require: [true, "Name is required"],
    },
    email:{
        type: String,
        require: [true, "Email is required"],
    },
    phone:{
        type:String,
        require:[true, "Number is required"],
    },
},{
    timestamps: true,
});

module.exports=mongoose.model("contacts",contactSchema);
