import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
const Connection = async () => {
    console.log("Try to  Connect Database");
  
  try {
    await mongoose.connect("mongodb+srv://merndashboard:merndashboard@cluster0.9saifng.mongodb.net/", {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
    console.log("Database Connected Successfully");
  } catch (error) {
    console.log(`Error while connecting database: ${error}`);
  }
};

export default Connection;
