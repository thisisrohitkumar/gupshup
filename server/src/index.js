require('dotenv').config()
const express = require('express')
const cors = require('cors')
const connectToDB = require('./db/connect')
const port = process.env.PORT || 8000
const app = express()

const userRouter = require('./routes/user.route')

// Middlewares
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cors())
app.use('/api/v1', userRouter)



// API Routes
app.get('/', (req, res) => {
    return res.status(200).send('Server Ki Taraf Se Namaste')
})



app.listen(port, () => {
    connectToDB(process.env.MONGODB_URL)
    console.log(`Server is listening on PORT ${ port }`)
})