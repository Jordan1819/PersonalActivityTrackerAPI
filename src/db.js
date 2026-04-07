/* db.js 
- Use connection pool to prevent new connections
  for each request
- Uses parametrized queries to prevent SQL injection
*/

const { Pool } = require('pg');
require('dotenv').config(); // for db credentials

const pool = new Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT,
});

module.exports = pool;
