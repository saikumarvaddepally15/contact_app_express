const mongoose= require('mongoose');
const connectDB= async()=>{
    try {
        const connection= await mongoose.connect(process.env.CONNECTION_STRING);
        console.log("DB Connection sucessful");
       // console.log("Data base connected", connectDB.connection.host, connectDB.connection.name); //Need to fix this error
       //TypeError: Cannot read properties of undefined (reading 'name')
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
}
module.exports=connectDB;

