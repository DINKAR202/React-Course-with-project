import express from "express";
import dotenv from "dotenv";

dotenv.config(); // Load environment variables

const app = express();
const port = process.env.PORT || 8000;

app.get("/", (req, res) => {
    res.json({ message: "Hi, it's working fine..." });
});

// * Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//* import routes

import ApiRoutes from "./routes/api.js";
app.use("/api", ApiRoutes);

//* Start the server with error handling
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
}).on("error", (err) => {
    console.error("Server failed to start:", err);
});
