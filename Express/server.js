const express = require("express")
const app = express();
const path = require("path");
const mainRouter = require('./routes/index.js')

const PORT = process.env.PORT || 9000;


app.set('view engine', 'ejs');
console.log(app.get('views'));


app.use(express.static('public'));

app.use(mainRouter);


app.listen(PORT, () => {
    console.log(`Listing app is ${PORT}`);
});