function apiKey(req, res, next) {
    const api_key = '1234567';
    console.log(req.query.api_key);
    if(req.query.api_key && ){

    } 
    next();
}

module.exports = apiKey;