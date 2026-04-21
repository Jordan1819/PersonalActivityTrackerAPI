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

// Import routes
const healthRoutes = require('./routes/health.routes');
const userRoutes = require('./routes/users.routes');
const activitiesRoutes = require('./routes/activities.routes');

// **** Request/ middleware pipeline ****

// Log incoming requests
app.use(logger);
// Log responses
app.use(responseLogger);

// Parse incoming JSON requests
app.use(express.json());

// Mount routes
app.use('/health', healthRoutes);
app.use('/users', userRoutes);
app.use('/activities', activitiesRoutes);

// Export express app
module.exports = app;
