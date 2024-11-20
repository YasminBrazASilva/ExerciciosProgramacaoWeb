const express = require('express');
const mongoose = require('mongoose');

require('dotenv').config();
const DB_USER = process.env.DB_USER;
const DB_PASSWORD = process.env.DB_PASSWORD;

const professorRouter = require('./routes/professor');

const app = express();

app.use(express.json());

app.use('/professores', professorRouter);

mongoose.connect(`mongodb+srv://${DB_USER}:${DB_PASSWORD}@cluster0.34xjm.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`)
    .then(() => {
        app.listen(3000, () => {
            console.log('Conectado ao mongoDB');
            console.log('Servidor iniciado na porta 3000');
        })
    })
    .catch((err) => {
        console.log(err);
    });