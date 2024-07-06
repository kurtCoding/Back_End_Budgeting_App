const express = require("express");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());

const transactionsController = require("./controllers/transactionsControllers");

app.get("/", (req, res) => {
    res.send("Hello World!");
});

app.use("/transactions", transactionsController);

module.exports = app;