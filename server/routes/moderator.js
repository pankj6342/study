const express = require('express');
const router = express.Router();

const { createModerator, getModerator } = require('../controllers/Moderator.js');

router.post('/createModerator',createModerator);
router.get('/getModerator',getModerator);
router.post('/addCourse',addCourse);

module.exports = router;