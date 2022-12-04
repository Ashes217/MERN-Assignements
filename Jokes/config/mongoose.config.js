const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/jokesdb', {
    useNewUrlParserL: true,
    useUnifiedTopology: true
})
.then(() => {
    console.log('Connected to Movie DB')
})
.catch((err) => {
    console.log(err)
})
