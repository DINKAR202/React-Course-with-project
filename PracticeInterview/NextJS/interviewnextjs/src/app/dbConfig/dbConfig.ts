import mongoose from "mongoose";

export async function connect() {
  try {
    mongoose.connect(process.env.MONGO_URI!);
    const connection = mongoose.connection;
    connection.on("connected", () => {
      console.log("MongoDB connected Successfully");
    });

    connection.on("error", (err) => {
      console.error("Error connecting to MongoDB:", err);
      process.exit();
    });
  } catch (error) {
    console.log("Something go ne wing");
    console.log(error);
  }
}
