import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import route from "./routes/userRoute.js";
// hahahah
// eeee
const app = express();
app.use(bodyParser.json());
dotenv.config();


const PORT = process.env.PORT || 3000;
const MONGOURL = process.env.MONGO_URL;

mongoose.connect(MONGOURL).then(()=>{
    //okay
    console.log("DB connected successfully! ");
    app.listen(PORT, ()=>{
        console.log(`Server is running on the success port ${PORT}`)
    })

}).catch(error => console.log(error))

// good
app.use("/api/user", route)
// over
// Done
