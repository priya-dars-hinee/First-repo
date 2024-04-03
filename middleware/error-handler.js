

const { CustomAPIError } = require('../error/custom-error');

const errorHandler = ( err,req, res,next) => {
    let statusCode = err.status || 500;
    let message = err.message || 'Something went wrong';

    if (err instanceof CustomAPIError) {
        statusCode = 500; // You can adjust this status code based on your error handling strategy
        message = err.message || 'Internal Server Error';
    }

    res.status(statusCode).json( 'PLease trty again');
};

module.exports = errorHandler;
