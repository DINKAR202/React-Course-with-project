const express = require("express")
const app = express();
const path = require("path");

const PORT = process.env.PORT || 9000;


app.set('view engine', 'ejs');
console.log(app.get('views'));


app.use(express.static('public'));


app.get('/', (req, res) =>{
    res.render('index', {
        title:'This is Home page'
    });
});

app.get('/about', (req, res) =>{
    res.render('about', {
        title:'This is about page'
    });
});


app.listen(PORT, () => {
    console.log(`Listing app is ${PORT}`);
});