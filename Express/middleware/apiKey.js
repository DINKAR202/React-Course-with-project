function apiKey(req, res, next) {
    const api_key = '1234567';
    console.log(req.query) 
    next();
}

module.exports = apiKey;