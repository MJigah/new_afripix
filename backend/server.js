const express = require('express')
const dotenv = require('dotenv').config()
const connectDb = require('./config/db')
const colors = require('colors')

connectDb()

const app = express()
app.use(express.json({limit: '50mb'}))
app.use(express.urlencoded({limit: '50mb', extended: true}))

app.use('/api/users', require('./routes/userRoutes'))
app.use('/api/images', require('./routes/imageRoutes'))
app.use('/api/categories', require('./routes/categoryRoutes'))

const PORT = process.env.PORT || 4000
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})