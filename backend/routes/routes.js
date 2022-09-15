import express from "express";
// import path from 'path';
// import router  from "express";
import { addEmployee, getEmployee, updateEmployee, deleteEmployee, loginAPI } from "../controllers/cotroller.js";

const router = express.Router();

router.get("/getEmployee", getEmployee);

router.post("/addEmployee", addEmployee);

router.delete("/deleteEmployee", deleteEmployee);

router.put("/updateEmployee", updateEmployee);

router.post("/login", loginAPI); 


export default router;
