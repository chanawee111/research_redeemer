import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";
import db from "./config/Database.js";
import router from "./routes/index.js";
const host = "192.168.1.27";
const clientPort = "5173";
const runningPort = 5000;

dotenv.config();
const app = express();

const corsOptions = {
    credentials:true,
    origin:[`http://${host}:${clientPort}`,`http://localhost:${clientPort}`]
}
 
app.use(cors(corsOptions));
//app.use(cors({credentials:true, origin:`http://localhost:${clientPort}`}));
app.use(cookieParser());
app.use(express.json());
app.use(router);
 
app.listen(runningPort, ()=> console.log(`Server running at port ${runningPort}`));