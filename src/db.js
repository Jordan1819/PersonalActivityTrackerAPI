/* db.js 
- Use connection pool to prevent new connections
  for each request
- Uses parametrized queries to prevent SQL injection
*/

const { Pool } = require('pg');
require('dotenv').config(); // for db credentials

const pool = new Pool({
    user: process.env.DB_USER,
    host: 'localhost',
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT || 5432
});

module.exports = {
    query: (text, params) => pool.query(text, params),
};
