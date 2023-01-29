import express from "express";
import cors from 'cors'
import dotenv from "dotenv";
import mongoose from "mongoose";
import authRoutes from "./routes/auth.js";
import notesRoutes from "./routes/notes.js";

dotenv.config();

const port = process.env.PORT || 5500;

const app = express();
app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("", authRoutes);
app.use("", notesRoutes);

mongoose.set('strictQuery', true);
mongoose.connect(process.env.MONGODB_URI)

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
