require('dotenv').config();
const express = require('express');
const { default: mongoose } = require('mongoose');
const User = require('./models/user');
const router = require('./routes/index');
const cors = require('cors');
const errorHandler = require('./middleware/ErrorHandlingMiddleware')

const PORT = process.env.PORT;
const db = process.env.db;

const app = express();
app.use(cors());
app.use(express.json());
app.use('/api', router);

mongoose
    .connect(db)
    .then((res) => console.log('connected to db'))
    .catch((error) => console.log(error));

// Обработка ошибок, последний Middleware
app.use(errorHandler);

const start = async() => {
    try{
        app.listen(PORT, () => console.log(`listening ${PORT}`));
    } catch(e) {
        console.log(e);
    }
}

start();