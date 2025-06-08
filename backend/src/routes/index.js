const express = require('express');
const router = express.Router();
const authRoutes = require('./auth.routes');
const userRoutes = require('./user.routes');

// API routes
router.use('/api/auth', authRoutes);
router.use('/api/users', userRoutes);

module.exports = router;
