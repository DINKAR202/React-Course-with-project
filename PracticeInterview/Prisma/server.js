import "dotenv/config"

import express from 'express';
const app = express()

const PORT = process.env.PORT || 3000


app.get('/', (req, res) => {
    return res.send("Hi")
})

// Middleware
app.use(express.json())
app.use(express.urlencoded({extended: false}))

// Routes file
import routes from "./routes/userRoutes.js"
app.use(routes);

app.listen(PORT, ()=> console.log(`Server is running on ${PORT}`))