const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 8000

//connect server to database
require('./config/mongoose.config')

//Middle ware
app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use(cors({
    origin: 'http://localhost:3000',
}))

const Routes = require('./routes/product.routes')
Routes(app)

app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`)
})