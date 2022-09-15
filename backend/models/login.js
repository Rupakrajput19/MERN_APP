import mongoose from "mongoose";

const loginSchema = new mongoose.Schema({
    name : {
        type: String,
        required: true,
    },
    email : {
        type: String,
        required: true,
    },
    mobile : {
        type: Number,
        required: true,
    },
    password : {
        type: String,
        required: true,
    },
  
});

export default mongoose.model('Login', loginSchema)