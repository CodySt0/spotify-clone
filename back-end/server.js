import express from "express";
import cors from "cors";
import "dotenv/config";

//app config
const app = express();
const port = process.env.port || 5002;

// middlewares
app.use(express.json());
//connect front end to backend
app.use(cors());

//rotues

app.get("/", (req, res) => res.send("API WORKING"));

app.listen(port, () => console.log(`Server started on ${port}`));
