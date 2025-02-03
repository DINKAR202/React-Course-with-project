import express from "express";
import dotenv from "dotenv";

dotenv.config(); // Load environment variables

const app = express();
const port = process.env.PORT || 8000;

app.get("/", (req, res) => {
    res.json({ message: "Hi, it's working fine..." });
});

// Start the server with error handling
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
}).on("error", (err) => {
    console.error("Server failed to start:", err);
});
