import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import userRoutes from "./routes/user.js";
import DBConnection from "./database/db.js";
dotenv.config();

const app = express();
const port = 5000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
app.use('/',userRoutes);

app.get('/', (req, res) => {res.send('Hello World!')});
app.all('*', (req, res) => {res.send('route dose not exist')});

DBConnection();

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})