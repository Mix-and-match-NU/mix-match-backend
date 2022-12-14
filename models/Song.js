const { Schema, model } = require('mongoose');

const songSchema = new Schema({
    title: {
     type: String,
    //  required: true,
     trim: true,
    },
    artist: {
     type: String,
     required: true,
    },
    album: {
     type: String,
     required: true,
     maxlength: 100,
    },
    year: {
     type: String,
     required: true,
    },
    genre: {
     type: String,
    //  required: true,
     maxlength: 24,
    },
})

const Song = model('Song', songSchema);

module.exports = Song;