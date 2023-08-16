const express = require("express");
const router= express.Router();
const {getAContact,getContact,updateContact,deleteContact,createContact}=require("../controllers/contactController");
router.route("/").get(getContact).post(createContact);
router.route("/:id").get(getAContact).put(updateContact).delete(deleteContact);
module.exports=router