/* server.js
- starts the server
- listens on a port
- no business logic
*/

// Import express app created in app.js
const app = require('./app');

// Set port for server to listen on - fallback to 3000 if no env var set
const PORT = process.env.PORT || 3000;

// Start server given port #, log that server is running
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});