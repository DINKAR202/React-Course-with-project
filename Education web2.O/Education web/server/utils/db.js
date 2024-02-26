const mongoose = require("mongoose");

const URI = process.env.MONGODB_URI;

const connectDb = async () => {
    try {
        await mongoose.connect(URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            writeConcern: {
                j: true,  // Journal acknowledgement
                w: 'majority',  // Majority acknowledgment
                wtimeout: 1000  // Write concern timeout in milliseconds
            },
        });
        console.log("Connection successful to DB");
    } catch (error) {
        console.error("Database connection failed:", error);
        process.exit(1);
    }
};

module.exports = connectDb;
