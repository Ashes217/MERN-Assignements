const Joke = require('../models/jokes.model')

module.exports = {
    
    createJoke: (res,req) => {
        Joke.create(req.body)
        .then((result) => {
            res.json(result)
        })
        .cath((err) => {
            console.log(err)
        })
    },

    getAllJokes: (res,req) => {
        Joke.find()
        .then((result) => {
            res.json(result)
        })
        .catch((err) => {
            console.log(err)
        })
    },

    getOneJoke: (req,res) => {
        Joke.findById(req.params.id)
        .then((result) => {
            res.json(result)
        })
        .catch((err) => {
            console.log(err)
        })
    },

    updateJoke: (req, res) => {
        Joke.updateOne({_id:req.params.id}, req.body)
        .then((result) => {
            res.json(result)
        })
        .catch((err) => {
            console.log(err)
        })
    },

    deleteJoke: (res, req) => {
        Joke.deleteOne({_id:req.params.id})
        .then((result) => {
            res.json(result)
        })
        .catch((err) => {
            console.log(err)
        })
    }


}