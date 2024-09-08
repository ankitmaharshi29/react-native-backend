const express = require('express');
const app = express();
const port = 3000;

// Import the routes from getdata.js
const getDataRoutes = require('./getdata');

// Middleware to parse JSON
app.use(express.json());

// Use the routes
app.use('/api', getDataRoutes);

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
