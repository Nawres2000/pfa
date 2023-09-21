// db.js
const mongoose = require("mongoose");

const connectDB = async () => {
  const connectionParams = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  };
  
  try {
    await mongoose.connect("mongodb+srv://noutech:pQN8aADPOLVrjRws@firstcluster.yeiyjeg.mongodb.net/?retryWrites=true&w=majority", connectionParams);
    console.log("Database connected successfully");
  } catch (error) {
    console.error("Database connection failed:", error);
  }
};

module.exports = connectDB;
