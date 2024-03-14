const express = require('express')
const cors = require('cors')
const port = process.env.PORT || 8000
const app = express()

// Middlewares
app.use(express.json())
app.use(cors())

// API Routes
app.get('/', (req, res) => {
    return res.status(200).send('Server Ki Taraf Se Namaste')
})

app.listen(port, () => {
    console.log(`Server is listening on PORT ${ port }`)
})