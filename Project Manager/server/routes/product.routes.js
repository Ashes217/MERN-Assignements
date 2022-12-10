const ProductController = require('../controllers/product.controllers')


module.exports = (app) => {
    //create a product/ add it to the database
    app.post('/api/createProduct', ProductController.createProduct )
    //get all products
    app.get('/api/getAllProducts', ProductController.getAllProducts)
    //get one product
    app.get('/api/oneProduct/:id', ProductController.getOneProduct)
    //update a product
    app.put('/api/updateProduct/:id', ProductController.updateProduct)
    //delete one product
    app.delete('/api/deleteProduct/:id', ProductController.deleteProduct)
}