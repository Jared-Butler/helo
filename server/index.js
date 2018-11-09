require('dotenv').config();
const express = require('express');
const massive = require('massive');
const controller = require('./controller');

let { SERVER_PORT, CONNECTION_URI, SECRET } = process.env

const app = express();

//middleware
app.use(express.json());


massive(CONNECTION_URI).then( db => app.set('db',db), console.log('DB is connected'))

app.post('/auth/register', controller.register);

app.post('/auth/login',controller.login);



app.listen(SERVER_PORT, () => console.log(`Server is live on port ${SERVER_PORT}`))