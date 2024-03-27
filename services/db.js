// Import dotenv to load environment variables from .env file
require('dotenv').config();

// Import mongoose
const mongoose = require('mongoose');

// Get the database connection string from environment variables
const DATABASE_URI = process.env.DATABASE;
const DATABASE_CONNECT=`${DATABASE_URI}contact`

// Connection string
mongoose.connect(DATABASE_CONNECT);

// Model Creation
const contactSchema = new mongoose.Schema({
    id: Number,
    name: { firstname: String, lastname: String },
    email: String,
    phone: String,
    address: { city: String, street: String, zipcode: String },
});

const contact = mongoose.model('contacts', contactSchema);

// Check if the connection is successful
mongoose.connection.on('connected', () => {
    console.log('Connected to MongoDB');
    // Place your code here to execute when the connection is established
});

module.exports = {
    contact
};
