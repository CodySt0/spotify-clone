import express from "express";
import cors from "cors";
import "dotenv/config";
import songRouter from "./src/routes/songRoute.js";
import connectDB from "./src/config/mongodb.js";
import connectCloudinary from "./src/config/cloudinary.js";

//app config
const app = express();
const port = process.env.port || 5002;
connectDB();
connectCloudinary;

// middlewares
app.use(express.json());
//connect front end to backend
app.use(cors());

//rotues

app.use("/api/song", songRouter);

app.get("/", (req, res) => res.send("API WORKING"));

app.listen(port, () => console.log(`Server started on ${port}`));
