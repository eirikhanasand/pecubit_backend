import express from "express"
import bodyParser from "body-parser"

const app = express()
const port = 3000

app.use(bodyParser.json())

let lotteryNumbers: number[][] = [
    [3, 4, 14, 15, 21, 32, 34],
    [5, 7, 12, 19, 22, 24, 32],
    [1, 2, 8, 16, 18, 23, 35],
    [8, 11, 16, 23, 26, 29, 33],
    [6, 9, 10, 27, 29, 31, 36],
]

let purchasedNumbers: number[][] = [[]]

// GET endpoint to error message
app.get('/', (req, res) => {
    res.json({error: "Invalid endpoint. Please use /lottery or /purchased"})
})

// GET endpoint to retrieve lottery numbers
app.get('/lottery', (req, res) => {
    res.json(lotteryNumbers)
})

// GET endpoint to retrieve purchased numbers and games
app.get('/purchased', (req, res) => {
    res.json(purchasedNumbers)
})

// POST endpoint to add purchased numbers and games
app.post('/purchased', (req, res) => {
    purchasedNumbers = req.body
    res.status(201).json(purchasedNumbers)
})

// PUT endpoint to update purchased values
app.put('/purchased', (req, res) => {
    purchasedNumbers = req.body
    res.json(purchasedNumbers)
})

// DELETE endpoint to clear purchased values
app.delete('/purchased', (req, res) => {
    purchasedNumbers = [[]]
    res.status(204).end()
})

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})
