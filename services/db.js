//connection code of node and mongodb
//1 import mongoose
const mongoose = require('mongoose')

//connection string
mongoose.connect('mongodb+srv://vaishnavms9656:luminar@cluster0.pqargr6.mongodb.net/ContactApp?retryWrites=true&w=majority');




//model creation
const contact = mongoose.model('contacts',{
    id: Number,
    name: { firstname: String, lastname: String },
    email: String,
    phone: String,
    address: { city: String, street: String, zipcode: String },
})

module.exports={
contact
}