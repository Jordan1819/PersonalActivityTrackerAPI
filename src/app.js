/* app.js
- creates the express app
- registers middleware
- mounts routes
*/

// Load express module
const express = require('express');

// Create express app instance
const app = express();

// Logger middleware
const logger = require('./middleware/logger');
const responseLogger = require('./middleware/responseLogger');

// Import routes defined in health.routes.js
const healthRoutes = require('./routes/health.routes');

// **** Request/ middleware pipeline ****

// Log incoming requests
app.use(logger);
// Log responses
app.use(responseLogger);

// Parse incoming JSON requests
app.use(express.json());

// Mount healthRoutes router under /health endpoint
app.use('/health', healthRoutes);

// Export express app
module.exports = app;