import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
// import bodyParser from 'body-parser';
import productRoutes from "./routes/productRoutes.js";

dotenv.config();
const app = express();
const port = process.env.port || 3002;

app.use(express.json());
app.use(cors());

mongoose
  .connect(process.env.MonGODB_URL)
  .then(() => console.log("Connected to MongoDB"))
  .catch((error) => console.log(error));

app.use("/api/products", productRoutes);

app.use((req, res) => {
  res.status(404).send(`
        <p> Le code de l'url <code>, ${req.url} </code> n'est pas bon</p>`);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
