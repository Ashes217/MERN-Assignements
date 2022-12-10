const mongoose = require('mongoose')

const ProductSchema = mongoose.Schema({

    title: {
        type:String
    },
    price: {
        type:Number
    },
    description: {
        type:String
    }
}, {timestamp:true})

//Model is the name of the collection
const Product = mongoose.model('Product', ProductSchema)

//exporting Model to use in other files
module.exports = Product