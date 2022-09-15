import express from "express";
import bodyParser from "body-parser";
import router from "./routes/routes.js";
import './DataBase/mongos.js'
import cors from "cors";
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.json());
app.use(cors());

app.use('/', router)

export default app;