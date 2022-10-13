const express = require('express');
const mongoose = require ('mongoose')
const router = require("./routes/book-routes")
const app = express();
const cors = require("cors");

app.use(express.json());
app.use(cors());
app.use("/books", router) // localhost:5000/books

mongoose
    .connect(
        "mongodb+srv: " /* Click connect at Database Deployments page */

        )
        .then(()=>console.log("Connected to Datebase"))
        .then(() => {
            app.listen(5000);
        }).catch((err) =>console.log(err));