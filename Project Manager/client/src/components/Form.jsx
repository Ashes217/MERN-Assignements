import React from 'react'
import { useState } from 'react'
import axios from 'axios'

const Form = () => {

    const [title, setTitle] = useState('')
    const [price, setPrice] = useState('')
    const [description, setDescription] = useState('')


    const submitHandler = (e) => {

        e.preventDefault()
        axios.post('http://localhost:8000/api/createProduct', {
            title,
            price,
            description
        })
        .then((res) => {
            console.log(res)
        })
        .catch((err) => {
            console.log(err)
        })


    }



return (
    <div>
        <h1>Product Manager</h1>
        <form onSubmit={submitHandler}>
            <label>Title:</label>
            <input type="text" onChange={(e) =>setTitle(e.target.value)} />
            <label>Price:</label>
            <input type="number" onChange={(e) =>setPrice(e.target.value)} />
            <label>Description: </label>
            <input type="text" onChange={(e) =>setDescription(e.target.value)} />
            <button>Submit</button>
        </form>
    </div>
)
}

export default Form
