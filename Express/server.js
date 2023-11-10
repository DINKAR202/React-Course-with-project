const express = require("express")
const app = express();
const path = require("path");
const mainRouter = require('./routes/index.js')
const productRouter = require('./routes/products.js')
const ErrorHandeler = require('./errors/ErrorHandeler');

// const apiKeyMiddleware = require('./middleware/apiKey');


const PORT = process.env.PORT || 9000;


app.set('view engine', 'ejs');
console.log(app.get('views'));

// app.use(apiKeyMiddleware);
app.use(express.static('public'));
app.use(express.json());
app.use(productRouter);
app.use(mainRouter);

app.use((req, res, next) => {


    return res.json({message: 'page not found!'});
    
});


app.use((err, req, res, next)=>{
    if(err instanceof ErrorHandeler) {
        res.json({
            error: {
                message: err.message,
                status: err.status
            }
        });
    }
    else{
        res.status(500).json({
            error: {
                message: err.message,
                status: err.status
            }
        });
    }
});

app.listen(PORT, () => {
    console.log(`Listing app is ${PORT}`);
});