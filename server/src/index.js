const express = require('express')
const routes = require('./routes')
const cors = require('cors')
const mongoose = require('mongoose')
const { urlencoded } = require('express')

const app = express()

app.use(cors())
app.use(express.json())
app.use(routes)

let user = ''
let pass = encodeURIComponent('')

mongoose.connect(
        `mongodb+srv://${user}:${pass}@cinfra-club.csmendp.mongodb.net/?retryWrites=true&w=majority`
    )
    .then(() => {

        console.log("MongoDB successfully connected")
        app.listen(3333)

    }).catch((err) => {

        console.log(err)

    })