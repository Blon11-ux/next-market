import mongoose from "mongoose";
const connectDB = async() => {
    try{
        await mongoose.connect("mongodb+srv://251015_db_user:251015@cluster0.pruxeba.mongodb.net/nextAppDatabase?retryWrites=true&appName=Cluster0");
        console.log("Success: Connected to MongoDB");
    }catch(e){
        console.log("Failed: UnConnected to MongoDB");
        return console.error(e);
    }
};

export default connectDB;
