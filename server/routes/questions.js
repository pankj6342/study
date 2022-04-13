const express = require('express');
const router = express.Router();

const { createQues, getAllQues, getQues } = require('../controllers/Question.js');

router.post('/createQuestion',createQues);
router.get('/getAllQuestion',getAllQues);
router.get('/getQuestion',getQues);

module.exports = router;