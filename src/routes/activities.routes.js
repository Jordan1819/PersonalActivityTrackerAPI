/*
activities.routes.js
- CRUD operations for activities
*/

const express = require('express');
const router = express.Router();
const db = require('../db');

// Get all activities for a user
router.get('/:userId', async (req, res) => {
    const { userId } = req.params;
    try {
        const result = await db.query(
            'SELECT activity_id, title, duration_minutes, activity_date FROM activities WHERE user_id = $1',
            [userId]
        );
        res.json(result.rows);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Database error'});
    }
});

// Add a new activity for a user
router.post('/', async (req, res) => {
    const { userId } = req.params;
    const { name, description, duration, date } = req.body;
    try {
        const result = await db.query(
            'INSERT INTO activities (activity_id, user_id, title, duration_minutes, activity_date) VALUES ($1, $2, $3, $4, $5) RETURNING activity_id, title, duration_minutes, activity_date',
            [userId, name, description, duration, date]
        );
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Database error'});
    }
});

module.exports = router;
