const express = require('express')
const dotenv = require('dotenv')
const connectDb = require('./config/db')
const colors = require('colors')

connectDb()

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false}))

app.use('/api/users', require('./routes/userRoutes'))
app.use('/api/images', require('./routes/imageRoutes'))

const PORT = process.env.PORT || 4000
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})