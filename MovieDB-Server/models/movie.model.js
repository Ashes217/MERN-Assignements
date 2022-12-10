const mongoose = require('mongoose')

const MovieSchema = mongoose.Schema({

    title:{
        type:String,
    },
    director: {
        type:String
    },
    genre: {
        type:String,
        enum: ['Fantasy', 'Sci-Fi', 'Thriller', 'Horror', 'Comedy', 'Drama', "Mystery", "Romance"]
    },
    releaseYear: {
        type: Number
    },
    rating: {
        type:String,
        enum: ['G', 'PG', 'PG-13', 'R', 'NC-17']
    },
    boxOffice: {
        type:Number
    },
    kidFriendly: {
        type: Boolean
    },
    boxArt: {
        type:String
    }



}, {timestamps:true})

// Model --> collection
const Movie = mongoose.model('Movie', MovieSchema)

//exporting Model to use in other files
module.exports = Movie

