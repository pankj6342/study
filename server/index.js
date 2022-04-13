const express = require('express');
const http = require('http');
const mongoose = require('mongoose');

const dotenv = require('dotenv').config();

const questionRoutes = require('./routes/questions');
const userRoutes = require('./routes/users.js');
const answerRoutes = require('./routes/answers.js');

const cors = require('cors');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

const PORT = process.env.PORT || 5000;

const app = express();
const server = http.createServer(app);

app.use(cookieParser());
app.use(bodyParser.json({ limit: "10mb", extented: true }));
app.use(bodyParser.urlencoded({ limit: "10mb", extented: true }));
app.use(cors({
    origin: ['https://localhost:3000'],
    credentials: true
}));
app.use('/uploads', express.static('uploads'))

app.use('/question', questionRoutes);
app.use('/user', userRoutes);
app.use('/answer', answerRoutes);
// app.use('/question', questionRoutes);


const CONNECTION_URL = process.env.CONNECTION_URL;

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => server.listen(PORT, () => console.log(`Server Running on Port:${PORT}`)))
    .catch((error) => console.log(`${error} did not connect`));