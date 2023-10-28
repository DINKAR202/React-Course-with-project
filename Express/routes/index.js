// const { Router } = require('express');

const router = require('express').Router();
const apiKeyMiddleware = require('../middleware/apiKey')

router.get('/', (req, res) =>{
    res.render('index', {
        title:'This is Home page'
    });
});


router.get('/about', (req, res) =>{
    res.render('about', {
        title:'This is about page'
    });
});

router.get('/api/products', apiKeyMiddleware, (req, res) => {
    res.json([
        {
            id: '123',
            name: 'Chrome'
        },
        {
            id: '124',
            name: 'Firefox'
        }
    ])
})


module.exports = router;    