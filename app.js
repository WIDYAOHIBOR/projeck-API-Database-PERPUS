const express = require('express')
const bodyParser = require('body-parser')

const logger = require('./middleware/logger')
const auth = require('./middleware/auth')
const bookRoute = require('./routes/bookRoute')

const app = express()

app.use(bodyParser.json())

// Middleware Logger (Global)
app.use(logger)

// Middleware Auth hanya untuk route books
app.use('/api/books', auth, bookRoute)

const PORT = 3000
app.listen(PORT, () => {
    console.log(`Server berjalan di http://localhost:${PORT}`)
})
