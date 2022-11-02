const express = require('express')

const routes = express.Router()

const Song = require('./models/Song')

routes.get('/songs', async(req, res) => {
    try {
        const chords = req.headers.chords.split(",")
        const genres = req.headers.genres
        let song
        if (genres !== undefined && genres.length > 0) {
            song = await Song.find({
                $expr: { $setIsSubset: ["$chords", chords] },
                "genre": { "$in": [genres] }
            })
        } else {
            song = await Song.find({
                $expr: { $setIsSubset: ["$chords", chords] }
            })
        }

        // const xong = await Song.find({
        //     "genre": { "$in": [genres] },
        //     "chords": { "$in": [chords] }
        // })

        res.status(200).json(song)
    } catch (error) {
        console.log(error)
        res.status(404).json({ error: error })
    }
})

module.exports = routes