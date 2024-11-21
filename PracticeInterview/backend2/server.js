const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json())

app.get('/', (req, res) => {
    console.log(req.body)
    res.send('Hello World!')
})


app.listen(PORT, () => {
    console.log("Server start h bhai tension mt le", PORT);
});

// 6201037248