// import http from 'http';
import app from './app.js';
// const db = require('./DataBase/mongos');

const port = 1010;

app.listen((port), () => {
    console.log(`Application is running at port:${port}`)
});