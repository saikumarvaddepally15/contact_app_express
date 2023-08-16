//@desc get api
//@route GET /api/contact
//access public
const getContact=  (req,res)=>{
    res.status(200).json({message:"Get all contacts"});
 }

 //@desc create api
//@route POST /api/contact
//access public
const createContact=  (req,res)=>{
    res.status(200).json({message:"create contact"});
}

//@desc get contact api
//@route GET /api/contact/:id
//access public
const getAContact=  (req,res)=>{
    res.status(200).json({message:`Get contact ${req.params.id}`});
}

//@desc update contact api
//@route PUT /api/contact/:id
//access public
const updateContact=  (req,res)=>{
    res.status(200).json({message:`update contact for ${req.params.id}`});
}

//@desc delete contact api
//@route DELETE /api/contact/:id
//access public
const deleteContact=  (req,res)=>{
    res.status(200).json({message:`delete contact ${req.params.id}`});
}
module.exports={getAContact,getContact,updateContact,deleteContact,createContact}
