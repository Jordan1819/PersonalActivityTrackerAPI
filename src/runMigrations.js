/*
runMigrations.js
PostgreSQL migration runner script
*/

const fs = require('fs');
const path = require('path');
const pool = require('./db');

async function runMigrations() {
    try {
        const migrationsPath = path.join(__dirname, '../migrations');
        const files = fs.readdirSync(migrationsPath).sort();

        for (const file of files) {
            const filePath = path.join(migrationsPath, file);
            const sql = fs.readFileSync(filePath, 'utf-8');

            console.log(`Running migration: ${file}`);
            await pool.query(sql);
        }

        console.log('All migrations successful');
        process.exit(0);
    } catch (err) {
        console.error('Migration error:', err);
        process.exit(1);
    }
}

runMigrations()
