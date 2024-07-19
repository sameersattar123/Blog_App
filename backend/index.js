import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
import upload from "express-fileupload";
import userRoutes from "./routes/userRoutes.js";
import postRoutes from "./routes/postRoutes.js";
import { notFound, errorHandler } from "./middlewares/errorMiddleware.js";
import path from "path";
import bodyParser from "body-parser";
const __dirname = path.resolve();

const app = express();

dotenv.config();
const corsOptions = {
  origin: "http://localhost:5173",
  credentials: true, //access-control-allow-credentials:true
  optionSuccessStatus: 200,
};
app.use(cors(corsOptions));

app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.json());

app.use(upload());

app.use("/uploads", express.static(__dirname + "/uploads"));

app.use("/api/users", userRoutes);
app.use("/api/posts", postRoutes);

app.use(notFound);
app.use(errorHandler);

mongoose
  .connect(process.env.MONGO_URL)
  .then(
    app.listen(4000, () => {
      console.log(`server is running at ${process.env.PORT}`);
    })
  )
  .catch((error) => console.log(error));
