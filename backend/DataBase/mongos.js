import mongoose from 'mongoose';
// const mongoose = require('mongoose');

const dbUrl = "mongodb://localhost:27017/MyDataBase";

mongoose.connect(dbUrl)
.then(() => console.log("Connection successfull..."))
.catch((error) => console.log(error));