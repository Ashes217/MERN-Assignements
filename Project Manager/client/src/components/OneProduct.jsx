import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams, useNavigate } from 'react-router-dom'
function OneProduct() {
    
    const navigate = useNavigate()

    const [product, setProduct] = useState({})


    const {id} = useParams()

    useEffect(() => {

        axios.get(`http://localhost:8000/api/oneProduct/${id}`)
        .then((res) => {
            setProduct(res.data)
        })
        .catch((err) => {
            console.log(err)
        })

    }, [])

    const deleteHandler = (productId) => {

        axios.delete(`http://localhost:8000/api/deleteProduct/${id}`)
        .then((res) => {
            navigate('/')
        })
        .catch((err) => {
            console.log(err)
        })

    }

return (

    <div>
        <h1>{product.title}</h1>
        <p> {product.price} </p>
        <p> {product.description} </p>
        <button onClick={() => navigate(`/editproduct/${product._id}`) }>Edit Product</button>
        <button onClick={deleteHandler}>Delete</button>
    </div>
)
}

export default OneProduct
