require('dotenv').config();
const connectToMongo = require('./config/db');
const express = require('express');
const cors = require('cors');

// Connect to MongoDB
connectToMongo();

const app = express();

const port = 8080 || process.env.port;


// Middleware
app.use(express.json());
app.use(cors());

// Available Routes
app.use('/api/auth', require('./routes/userRoutes'));

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});