// const { Router } = require('express');

const router = require('express').Router();

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


module.exports = router;    