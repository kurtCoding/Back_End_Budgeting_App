const express = require("express");
const router = express.Router();
const transactionsArray = require("../models/transaction");

router.get("/", (req, res) => {
    res.send(transactionsArray);
});

router.get("/:id", (req, res) => {
    const { id } = req.params;
    const transaction = transactionsArray.find((item) => item.id === +id)
    if (transaction) {
        res.send(transaction);
    } else {
        res.json({error: `Item with id: ${id} not found`})
    }
})

module.exports = router;