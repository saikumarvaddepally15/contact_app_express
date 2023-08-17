const express = require("express");
const dotenv=require("dotenv").config();
const errorhandler=require("./middelware/errorhandler")
const app = express();
const port = process.env.PORT || 5000;
app.use(express.json()); //parser to receive the data from client to server
app.use("/api/contacts",require("./routes/contactRoutes")); //middleware
app.use(errorhandler);

app.listen(port,()=>{
console.log(`server running on port ${port}`)
});
