const express = require('express')

const routes = express.Router()

const Song = require('./models/Song')

routes.get('/songs', async (req, res) => {
    try {
        const chords = req.headers.chords.split(",")
        const song = await Song.find({$expr: {$setIsSubset: ["$chords", chords]}})
        
        res.status(200).json(song)
    } catch (error) {
        console.log(error)
        res.status(404).json({error: error})
    }
})

module.exports = routes