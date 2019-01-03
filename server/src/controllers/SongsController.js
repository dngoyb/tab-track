const {
    Song
} = require('../models')


module.exports = {
    async getAllSongs(req, res) {
        try {
            const songs = await Song.findAll({
                limit: 10
            })
            res.status(200).send(songs)
        } catch (err) {
            res.status(500).send({
                error: 'An error has occured trying to fetch songs'
            })
        }
    },
    async show(req, res) {
        try {
            const song = await Song.findById(req.params.songId)
            res.status(200).send(song)
        } catch (err) {
            res.status(500).send({
                error: 'An error has occured trying to fetch songs'
            })
        }
    },
    async postSongs(req, res) {
        try {
            const song = await Song.create(req.body)
            res.status(200).send(song)
        } catch (err) {
            res.status(500).send({
                error: 'An error has occured trying to create a song'
            })
        }
    },

}