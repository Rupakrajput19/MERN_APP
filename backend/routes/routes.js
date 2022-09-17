import express from "express";
// import path from 'path';
// import router  from "express";
import { addUser, getUser, updateUser, deleteUser, loginAPI } from "../controllers/cotroller.js";

const router = express.Router();

router.get("/getUser", getUser);

router.post("/addUser", addUser);

router.delete("/deleteUser", deleteUser);

router.put("/updateUser", updateUser);

router.post("/login", loginAPI); 


export default router;
