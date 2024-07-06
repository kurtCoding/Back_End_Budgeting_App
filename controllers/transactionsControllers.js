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

router.post("/", (req, res) => {
    const currentItem = { id: transactionsArray.length + 1, ...req.body }
    transactionsArray.push(currentItem);

    res.status(201).send(transactionsArray[transactionsArray.length - 1]);
});

router.delete("/:id", (req, res) => {
    const { id } = req.params;
    const itemDeleteIndex = transactionsArray.findIndex((item) => item.id === +id);
    
    if (itemDeleteIndex !== -1) {
        transactionsArray.splice(itemDeleteIndex, 1)
        res.redirect("/transactions");
    } else {
        res.status(404).json({error: `Item with id: ${id} not found!`})
    };
})

module.exports = router;