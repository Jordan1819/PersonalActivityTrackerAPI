/*
users.routes.js
- CRUD operations for users
*/

const express = require('express');
const router = express.Router();
const db = require('../db');
const bcrypt = require('bcrypt');

// Get all users
router.get('/', async (req, res) => {
    try {
        const result = await db.query('SELECT user_id, username, email FROM users');
        res.json(result.rows);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Database error'});
    }
});

// Create a new user & hash password
router.post('/', async (req, res) => {
    const { username, email, password } = req.body;
    try {
        const saltRounds = 10;
        const passwordHash = await bcrypt.hash(password, saltRounds);

        const result = await db.query(
            'INSERT INTO users (username, email, password_hash) VALUES ($1, $2, $3) RETURNING id, username, email',
            [username, email, passwordHash]
        );
        res.status(201).json(result.rows[0]);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Database error'});
    }
});

// Select a specific user by username
router.get('/:username', async (req, res) => {
    const { username } = req.params;
    try {
        const result = await db.query(
            'SELECT user_id, username, email FROM users WHERE username = $1',
            [username]
        );
        if (result.rows.length === 0) {
            return res.status(404).json({ error: 'User not found'});
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Database error'});
    }
});

module.exports = router;
