const express = require("express")
const app = express();

const PORT = process.env.PORT || 9000;


app.get('/', (req, res) =>{
    res.send('Hello from Express js........');
});


app.listen(PORT, () => {
    console.log(`Listing app is ${PORT}`);
});