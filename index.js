const express = require('express');
const app = express();

// Middleware to parse JSON requests
app.use(express.json());

// Sample data (temporary database)
const users = [];
const products = [];

// CRUD for users
app.get('/users', (req, res) => {
    res.json(users);
});

app.post('/users', (req, res) => {
    const user = req.body;
    users.push(user);
    res.status(201).json(user);
});

// CRUD for products
app.get('/products', (req, res) => {
    res.json(products);
});

app.post('/products', (req, res) => {
    const product = req.body;
    products.push(product);
    res.status(201).json(product);
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});