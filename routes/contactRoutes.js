const express = require("express");
const router= express.Router(); 
const {getAContact,getContact,updateContact,deleteContact,createContact}=require("../controllers/contactController");
const validateToken = require("../middelware/validateTokenHandler");

router.use(validateToken);
router.route("/").get(getContact).post(createContact);
router.route("/:id").get(getAContact).put(updateContact).delete(deleteContact);
module.exports=router