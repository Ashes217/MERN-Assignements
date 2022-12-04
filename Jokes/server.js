const express = require('express')
const app =express
const PORT = 8000


require('./config/mongoose.config')

//middle ware

app.use(express.json())
app.use(express.urlencoded({extended:true}))

const Routes = require('./routes/jokes.routes')
Routes(app)

app.listen(PORT, () =>{
    console.log('Server is running on 8000')
})