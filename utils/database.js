import mongoose from "mongoose";

let isConnected = false; // track connection

export const connectToDB = async () => {
  
  mongoose.set("strictQuery", true);
  
  if (isConnected) {
    console.log("Connected ✅");
    return;
  }

  try {
    await mongoose.connect(process.env.DB_URI, {
      dbName: "Promptology",
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    isConnected = true

    console.log('Connected ✅')
  } catch (err) {
    console.log(err);
  }
};