const mongoose = require('mongoose')

const Song = mongoose.model('Song', {
    song: String,
    mod: Number,
    artist: String,
    genre: String,
    chords: [],
})

module.exports = Song