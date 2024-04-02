require('dotenv').config();
const express = require('express');
const { default: mongoose } = require('mongoose');
const router = require('./routes/index');
const cors = require('cors');
//const fileUpload = require('express-fileupload');
const errorHandler = require('./middleware/ErrorHandlingMiddleware');

//const MongoClient = require("mongodb").MongoClient;
 
const url = process.env.url;
// создаем объект MongoClient и передаем ему строку подключения
//const mongoClient = new MongoClient(url);

const PORT = process.env.PORT;

const app = express();
app.use(cors());
app.use(express.json());
//app.use(fileUpload({}));
app.use('/api', router);

mongoose
    .connect(url)
    .then((res) => console.log('connected to db'))
    .catch((error) => console.log(error));

//const db = mongoClient.db("sport_shop");
//const collection = db.collection("roles");


// Обработка ошибок, последний Middleware
app.use(errorHandler);

const start = async() => {
    try{
        app.listen(PORT, () => console.log(`listening ${PORT}`));
        // const userRole = new Role();
        // const adminRole = new Role({value: "ADMIN"});
        // await collection.insertOne(userRole);
        // await collection.insertOne(adminRole);
    } catch(e) {
        console.log(e);
    }
}

start();