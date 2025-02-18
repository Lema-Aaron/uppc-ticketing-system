const express = require('express');
const cors = require("cors");
const pool = require('./database');
const bodyParser = require('body-parser');
const orderRoutes = require('./routes/orderRoutes');
const app = express();
const host = 3000;

// Connect to the database

pool.query('SELECT NOW()', (err, result) => {
    if (err) {
        console.error('Error connecting to the database:', err);
    } else {
        console.log('Successfully connected to PostgreSQL database');
    }
});
app.use(express.json());
app.use(cors());
// Use order routes
app.use('/api/v1/orders', orderRoutes);

app.listen(host, () => {
    console.log(`Server is running at port: ${host}`);
});