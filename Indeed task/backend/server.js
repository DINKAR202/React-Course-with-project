const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const ExcelJS = require('exceljs');
const PDFDocument = require('pdfkit');
const fs = require('fs');

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());

// MongoDB connection
mongoose.connect('mongodb+srv://rathordinkar5:OzKXwH2BqYylSfcn@cluster0.8c7yjyg.mongodb.net/?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true });
const connection = mongoose.connection;
connection.once('open', () => {
    console.log('MongoDB database connection established successfully');
});

// MongoDB Schema
const calculationSchema = new mongoose.Schema({
    number1: Number,
    number2: Number,
    result: Number,
});

const Calculation = mongoose.model('Calculation', calculationSchema);

// Express API endpoints
app.post('/calculate', async (req, res) => {
    const { number1, number2 } = req.body;
    const result = number1 + number2;

    const calculation = new Calculation({ number1, number2, result });

    try {
        await calculation.save();

        res.json({ result });
    } catch (err) {
        res.status(500).send(err.message);
    }
});

app.get('/get-result', async (req, res) => {
    try {
        const calculations = await Calculation.find().sort({ _id: -1 }).limit(1);
        const result = calculations[0].result;
        res.json({ result });
    } catch (err) {
        res.status(500).send(err.message);
    }
});

app.get('/print-pdf', async (req, res) => {
    try {
        const calculations = await Calculation.find().sort({ _id: -1 }).limit(1);
        const result = calculations[0].result;

        const pdfDoc = new PDFDocument();
        pdfDoc.pipe(fs.createWriteStream('calculation.pdf'));
        pdfDoc.text(`Result: ${result}`);
        pdfDoc.end();

        res.json({ message: 'PDF generated successfully' });
    } catch (err) {
        res.status(500).send(err.message);
    }
});

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});
