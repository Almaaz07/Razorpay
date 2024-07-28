import express, { urlencoded } from "express";
import { config } from "dotenv";
import paymentRoute from "./routes/paymentRoutes.js";
import cors from "cors"
config({path:"./config/config.env"})

export const app = express() 
app.use(express.json());
app.use(urlencoded({extended:false}))
app.use(cors());
app.use("/api" , paymentRoute)

app.get("/api/getKey" , (req, res)=> res.status(200).json({key:process.env.RAZORPAY_API_KEY}))