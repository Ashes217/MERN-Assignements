
const express = require('express')
const app = express()
const PORT = 8000

const {faker} = require('@faker-js/faker')


app.listen(PORT, () => {
    console.log(`I am running on port ${PORT}`)
})

const newUser = () => {

    return {

        _id:faker.datatype.uuid(),
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        email: faker.internet.email(),
        phoneNumber: faker.phone.number('504-###-####'),
        password: faker.internet.password(15, true)
    }

}

const createCompany = () => {

    return {

        _id:faker.datatype.uuid(),
        companyName: faker.company.name(),
        address: {
            street: faker.address.street(),
            city: faker.address.city(),
            state: faker.address.state(),
            zipCode:faker.address.zipCode(),
            country: faker.address.country()
        }

    }

}

//creates a new user
app.get('/api/users/new', (req,res) => {
    // console.log(req.url, req.method)
    const user = newUser()
    res.json(user)
})

// creates a new company
app.get('/api/companies/new', (req,res) => {
    const company = createCompany()
    res.json(company)
})

// returns a user and a company
app.get('/api/user/company', (req,res) => {
    const user = newUser()
    const company = createCompany()
    res.json([user,company])
    
})