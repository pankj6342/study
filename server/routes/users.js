const express = require('express');
const router = express.Router();

const { createUser, getUser } = require('../controllers/User.js');

router.post('/createUser',createUser);
router.get('/getUser',getUser);

module.exports = router;