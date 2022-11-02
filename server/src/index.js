require('dotenv').config()
const express = require('express')
const routes = require('./routes')
const cors = require('cors')
const mongoose = require('mongoose')

const app = express()

app.use(cors())
app.use(express.json())
app.use(routes)

let user = process.env.DB_USER
let pass = encodeURIComponent(process.env.DB_PASS)

mongoose.connect(
        `mongodb+srv://${user}:${pass}@cinfra-club.csmendp.mongodb.net/cinfraClub?retryWrites=true&w=majority`
    )
    .then((res) => {
        console.log("MongoDB successfully connected")
        app.listen(3333)
    }).catch((err) => {
        console.log(err)
    }
)

