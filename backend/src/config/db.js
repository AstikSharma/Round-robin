import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const connectDB = async () => {
  if (!process.env.MONGO_URI) {
    console.error("Error: MONGO_URI is undefined. Check your .env file.");
    process.exit(1);
  }
  await mongoose.connect(process.env.MONGO_URI);
};

export default connectDB;