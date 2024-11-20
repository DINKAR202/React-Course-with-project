const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/test', (req, res) => {
    res.send('Hi there')
})

app.post('/items', (req, res) => {
    res.send('Thik items post h bhai tension mt le.')
})

app.put('/items/:id', (req, res) => {
    res.send('Thik items update h bhai tension mt le.')
})


app.delete('/items/:id', (req, res) => {
    res.send('Thik items delete h bhai tension mt le.')
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})