import express from "express";
import { PORT, mongoDBURL } from "./config.js";
import mongoose from "mongoose";
import { Book } from "./models/bookModel.js";
import booksRoute from "./routes/booksRoutes.js";
import cors from "cors";

const app = express();
// const cors = require("cors");

// middleware for parsing request body
app.use(express.json());

// middleware for handling CORS(cross origin resource policy) policy
// option 1: allow all origins with default of cors(*)
app.use(cors());

// option 2: allow custom origins
app.use(
  cors({
    origin: "http://localhost:3000",
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type"],
  })
);

app.get("/", (request, response) => {
  console.log(request);
  return response.status(234).send("it is running now");
});

// middleware for books router
app.use("/", booksRoute);

mongoose
  .connect(mongoDBURL)
  .then(() => {
    console.log("App connected to database");
    app.listen(PORT, () => {
      console.log(`App is listening to Port: ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
