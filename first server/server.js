// Simple and beginning start of a Server
const express = require('express')
const app = express()
const PORT = 8000

/// needs port you run it on and then a callback function
app.listen(PORT, () => {
    console.log(`Server how now been changed and running on port ${PORT}`)
} )


// Middleware 
// functions that run along the path of our request
// take post data and add it into the body field of the request object

app.use(express.json())
app.use(express.urlencoded({extended:true}))


// First route (using GET request)
// request and response 
app.get('/user', (req,res) => {
    console.log(req)
    console.log(req.url, req.method)
    const user = createUser()
    res.json(user)
})

app.get('/company', (req,res) => {
    const company = createCompany()
    res.json(company)
})

app.get('/word/:word', (req,res) => {
    console.log(req)
    res.json(req.params.word)
})

app.post('/addUser', (req,res) => {

    console.log(req.body)
    res.json(req.body)

})
