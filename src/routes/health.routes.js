/* health.routes.js
- simple endpoint
- returns something like { status: "ok" }
*/

// Import express app
const express = require('express');

// Create router object
const router = express.Router();

// Define route for GET /health
router.get('/', (req, res) => {
    res.json({ status: 'ok' });
});

// Export router so app.js can import & mount it under /health
module.exports = router;