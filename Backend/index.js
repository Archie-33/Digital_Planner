const express = require('express');

//initializing express app
const app = express();


const port = 5000;

const userRouter = require('./routers/userRouter');
const planRouter = require('./routers/planRouter');
const cors = require('cors');

// middleware

// to parse json data into javascript object
app.use(express.json());

// for allowing frontend to access backend
app.use( cors({ origin : ['http://localhost:3000'] }) );

app.use('/plan', planRouter);
app.use('/user', userRouter);

app.get('/add', (req, res) => {
    res.send('Response from Express!');
});

app.get('/home', (req, res) => {
    res.send('Response from Express Home!');
});

// starting the server
app.listen(port, () => console.log('server started'));