const express = require('express');
const router = express.Router();

const { createAnswer, getAnswer } = require('../controllers/Answer.js');

router.post('/createAnswer',createAnswer);
router.get('/getAnswer',getAnswer);

module.exports = router;