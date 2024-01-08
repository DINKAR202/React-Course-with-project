const express = require("express");
const app = express();

app.get("/", (req, res)=>{
    res.status(200).send("Welcome to Home page");
});

app.get("/register", (req, res)=>{
    res.status(200).send("Welcome to Register page");
});

const PORT = 5000;
app.listen(PORT, () =>{
    console.log(`Server is running at port: ${PORT}`);
});