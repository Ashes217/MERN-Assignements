// import controller functions

const JokeController = require('../controllers/jokes.controllers')

module.exports = (app) => {
    //get all jokes
    app.post('/api/createJoke', JokeController.createJoke)
    //get all jokes
    app.get('/api/getAllJokes', JokeController.getAllJokes)
    //get one joke
    app.get('/api/updateJoke/:id', JokeController.getOneJoke)
    //update joke
    app.put('/api/updateJoke/:id', JokeController.updateJoke)
    // Delete one joke
    app.delete('/api/deleteJoke/:id', JokeController.deleteJoke)
}