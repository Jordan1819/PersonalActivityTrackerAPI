/* app.js
- creates the express app
- registers middleware
- mounts routes
*/

// Load express module
const express = require('express');

// Create express app instance
const app = express();

// Add middleware that parses incoming JSON requests
app.use(express.json());

// Import routes defined in health.routes.js
const healthRoutes = require('./routes/health.routes');

// Mount healthRoutes router under /health
app.use('/health', healthRoutes);

// Export express app
module.exports = app;