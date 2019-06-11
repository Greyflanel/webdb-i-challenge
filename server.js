const express = require('express');

const server = express();
const budgetdb = require("./data/accounts-model");

server.use(express.json());

server.get('/', async (req, res) => {
    try {
        const budget = await budgetdb.find(req.body);
        res.status(200).json(budget);
    } catch (error) {
        console.log(error);
        res.status(404).json({ message: 'Error retrieving budget.'})
    }
})


module.exports = server;