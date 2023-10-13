import express from "express";
import bodyParser from "body-parser";
const app = express();
const port = 3000;
app.use(bodyParser.json());
// Sample data to simulate a database
let lotteryNumbers = {
    lotto: [3, 4, 14, 15, 21, 32, 34],
    pogchamp: [3, 4, 14, 15, 21, 32, 34],
    megaluck: [3, 4, 14, 15, 21, 32, 34],
    eveningspin: [3, 4, 14, 15, 21, 32, 34],
};
let purchasedNumbers = {
    lotto: null,
    pogchamp: null,
    megaluck: null,
    eveningspin: null
};
// GET endpoint to retrieve lottery numbers
app.get('/lottery', (req, res) => {
    res.json(lotteryNumbers);
});
// GET endpoint to retrieve purchased numbers and games
app.get('/purchased', (req, res) => {
    res.json(purchasedNumbers);
});
// POST endpoint to add purchased numbers and games
app.post('/purchased', (req, res) => {
    purchasedNumbers = req.body;
    res.status(201).json(purchasedNumbers);
});
// PUT endpoint to update purchased values
app.put('/purchased', (req, res) => {
    purchasedNumbers = req.body;
    res.json(purchasedNumbers);
});
// DELETE endpoint to clear purchased values
app.delete('/purchased', (req, res) => {
    purchasedNumbers = {
        lotto: null,
        pogchamp: null,
        megaluck: null,
        eveningspin: null
    };
    res.status(204).end();
});
// Start the server
app.listen(port, () => {
    console.log(`Server is swimming on port ${port}`);
});
