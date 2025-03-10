const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const recipeRoutes = require('./routes/recipes');
const app = express();
const PORT = 5000;

mongoose.connect('mongodb+srv://seonnate:nateseon@cluster0.z7zhb.mongodb.net/recipeDB?retryWrites=true&w=majority&appName=Cluster0');

// middleware
app.use(cors({
    origin: 'https://glorious-capybara-jjrw767jw6r7fwxq-3000.app.github.dev', // set client domain
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type']
}));
app.use(express.json());


// routing
app.use('/api', recipeRoutes);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
