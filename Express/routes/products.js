const router = require('express').Router();
const products = require('../productData');


router.get('/products', (req, res) =>{
    res.render('products', {
        title:'This is products page'
    });
});

router.get('/api/products', (req, res) => {
    res.json(products)
})

router.post('/api/products', (req, res) => {
    const {name, price} = req.body;

    if(!name || !price) {
        return res.status(422).json({error: 'All fields are required.'})
    }

    products.push({
        name,
        price,
        id: new Date().getTime().toString()
    })
    
})


module.exports = router;