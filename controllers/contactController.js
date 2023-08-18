const asyncHandler = require('express-async-handler');
const Contact = require("../models/contactModel");
//@desc get api
//@route GET /api/contact
//access public
const getContact= asyncHandler(async (req,res)=>{
    const contacts= await Contact.find();
    res.status(200).json(contacts);
 });

//@desc create api
//@route POST /api/contact
//access public
const createContact= asyncHandler( async(req,res)=>{
    console.log("the req body is :",req.body);
    const {name,email,phone} = req.body;
    if(!name || !email || !phone){
        res.status(400);
        throw new Error("All fields are mandatory");
    }
    else{
    const contact=await Contact.create({
        name,
        email,
        phone,
    });
    res.status(200).json(contact);
}
});

//@desc get contact api
//@route GET /api/contact/:id
//access public
const getAContact= asyncHandler( async(req,res)=>{
    const contact = await Contact.findById(req.params.id);
    if(!contact){
        res.status(404);
        throw new Error("Contact not Found");
    }
    res.status(200).json(contact);
});

//@desc update contact api
//@route PUT /api/contact/:id
//access public
const updateContact=  asyncHandler(async(req,res)=>{
    const contact = await Contact.findById(req.params.id);
    if(!contact){
        res.status(404);
        throw new Error("Contact not found");
    }
    const updatecontact= await Contact.findByIdAndUpdate(req.params.id,req.body,{new:true})
    res.status(200).json(updatecontact);
});

//@desc delete contact api
//@route DELETE /api/contact/:id
//access public
const deleteContact=  asyncHandler(async(req,res)=>{
    const contact = await Contact.findById(req.params.id);
    if(!contact){
        res.status(404);
        throw new Error("Contact not found");
    }
    await Contact.deleteOne();
    res.status(200).json(contact);
});
module.exports={getAContact,getContact,updateContact,deleteContact,createContact}
