/* responseLogger.js
- Logs server responses to incoming requests
*/

const responseLogger = (req, res, next) => {
    res.on('finish', () => {
        console.log(`Response Status: ${res.statusCode}`);
    });
    next();
};

module.exports = responseLogger;