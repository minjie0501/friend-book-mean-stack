const express = require('express')
require('dotenv').config()
const bodyParser = require('body-parser')
const app = express()
const friendRouter = require('./router/friendRouter')
const mongoose = require('mongoose');
const cors = require('cors')

mongoose.connect(process.env.DB_URL);


app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cors())

app.use('/friends', friendRouter)



app.listen(process.env.PORT)