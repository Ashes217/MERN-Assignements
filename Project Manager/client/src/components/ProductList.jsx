import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'

const ProductList = () => {

    const [list, setList] = useState([])

    const navigate = useNavigate()


    useEffect(() => {
        // async request
        axios.get('http://localhost:8000/api/getAllProducts')
        .then((res) => {
            setList(res.data)
            console.log(res)
        })
        .catch((err) => {
            console.log(err)
        })
    }, [])

    const deleteHandler = (productID) => {

        axios.delete(`http://localhost:8000/api/deleteProduct/${productID}`)
        .then((res) => {
            
            console.log(res)

            const newList = list.filter((product) => product._id !== productID)
            setList(newList)

        })
        .catch((err) => {
            console.log(err)
        })

    }

    return (
    <div>
        <h1>All Products:</h1>
        {
            list.map((product) => (
                <div> 
                    {
                        <Link to={`/oneproduct/${product._id}`}>{product.title}</Link>
                    }
                    {
                        <button onClick={() => navigate(`/editproduct/${product._id}`) }>Edit Product</button>
                    }
                    {
                        <button onClick={() => deleteHandler(product._id)}>Delete</button>
                    }
                </div>
            ))
        }
    </div>
)
}

export default ProductList
