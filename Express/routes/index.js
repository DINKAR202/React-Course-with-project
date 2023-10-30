const router = require('express').Router();
const apiKeyMiddleware = require('../middleware/apiKey');

// router.use(apiKeyMiddleware);

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

router.get('/api/products',apiKeyMiddleware, (req, res) => {
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

router.get('/cart', (req, res) =>{
    res.render('cart', {
        title:'This is Cart page'
    });
});


module.exports = router;    