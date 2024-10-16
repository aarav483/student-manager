const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = 5000;

// Middleware to parse JSON
app.use(bodyParser.json());

let products = []; // In-memory product list (this won't persist after server restart)

app.post('/api/add-product', (req, res) => {
    const { price, name, category } = req.body;

    // Simulate adding the product to a database
    const newProduct = { id: products.length + 1, price, name, category };
    products.push(newProduct);

    res.status(201).json({ message: 'Product added successfully!', product: newProduct });
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
