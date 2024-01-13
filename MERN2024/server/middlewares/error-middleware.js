const errorMiddleware = (err, req, res, next){
    const status = err.status | 500;
    const message = err.message | "BACKEND ERROR";
    const extraDetails = err.extraDetails | "Error from Backend";
};

module.exports = errorMiddleware;