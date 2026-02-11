/* logger.js
- logs incoming requests
*/


const logger = (req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    
    // move to next middleware/ continue down pipeline
    next();
};

module.exports = logger;