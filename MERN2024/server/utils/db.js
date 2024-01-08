const mongoose = require("mongoose");

const URI = "mongodb+srv://rathordinkar5:fZXuurOaX85aODc4@cluster0.8c7yjyg.mongodb.net/?retryWrites=true&w=majority";
// mongoose.connect(URI)

const connectDb = async () => {
    try {
        await mongoose.connect(URI);
        console.log("Connection successful to DB");
    } catch (error) {
        console.log("database connection failed");
        process.exit(0);
    }
}