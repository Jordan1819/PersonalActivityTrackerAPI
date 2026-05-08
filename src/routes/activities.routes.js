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
router.post('/:userId/activities', async (req, res) => {
    const { userId } = req.params;
    const { name, duration, date } = req.body;
    try {
        const result = await db.query(
            'INSERT INTO activities (user_id, title, duration_minutes, activity_date) VALUES ($1, $2, $3, $4) RETURNING activity_id, title, duration_minutes, activity_date',
            [userId, name, duration, date]
        );

        res.status(201).json(result.rows[0]);

    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Database error'});
    }
});

module.exports = router;
