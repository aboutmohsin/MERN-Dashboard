import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
const Connection = async () => {
  try {
    await mongoose.connect(process.env.DB, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
    console.log("Database connected Successfully");
  } catch (error) {
    console.log(`Error while connecting database: ${error}`);
  }
};

export default Connection;
