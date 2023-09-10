const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000; // You can change this port as needed

// Middleware to parse JSON requests
app.use(bodyParser.json());

// In-memory data storage (replace with a database in a production environment)
const registrations = [];

// API endpoint to handle candidate registration
app.post('/api/register', (req, res) => {
    const { name, roll, email, city } = req.body;

    // Basic validation (you can add more robust validation)
    if (!name || !roll || !email || !city) {
        return res.status(400).json({ message: 'All fields are required' });
    }

    const registration = { name, roll, email, city };
    registrations.push(registration);

    return res.status(201).json({ message: 'Registration successful' });
});

// API endpoint to retrieve all registrations
app.get('/api/registrations', (req, res) => {
    res.json(registrations);
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
