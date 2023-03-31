const express = require('express');

//initializing express app
const app = express();


const port = 5000;

const userRouter = require('./routers/userRouter');
const planRouter = require('./routers/planRouter');
const mealRouter = require('./routers/mealRouter');
const reminderRouter = require('./routers/reminderRouter');
const routineRouter = require('./routers/routineRouter');
const workoutRouter = require('./routers/workoutRouter');
const examRouter = require('./routers/examRouter');
const termRouter = require('./routers/termRouter');
const todoRouter = require('./routers/todoRouter');
const todo2Router = require('./routers/todo2Router');
const budgetRouter = require('./routers/budgetRouter');
const expenseRouter = require('./routers/expenseRouter');
const totalRouter = require('./routers/totalRouter');


const cors = require('cors');

// middleware

// to parse json data into javascript object
app.use(express.json());

// for allowing frontend to access backend
app.use( cors({ origin : ['http://localhost:3000'] }) );

app.use('/plan', planRouter);
app.use('/user', userRouter);
app.use('/meal', mealRouter);
app.use('/reminder', reminderRouter);
app.use('/routine', routineRouter);
app.use('/workout', workoutRouter);
app.use('/exam', examRouter);
app.use('/term', termRouter);
app.use('/budget', budgetRouter);
app.use('/expense', expenseRouter);
app.use('/total', totalRouter);
app.use('/todo', todoRouter);
app.use('/todo2', todo2Router);



app.get('/add', (req, res) => {
    res.send('Response from Express!');
});

app.get('/home', (req, res) => {
    res.send('Response from Express Home!');
});

// starting the server
app.listen(port, () => console.log('server started'));