const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/autorsdb', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then (()=> {
    console.log("Connected to Authors DB")
}).catch((err)=>{
    console.log(err)
})