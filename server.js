const express = require('express');
const app = express();

// Use the environment port or default to 3000 for local development
const PORT = process.env.PORT || 3000;

// Import the routes from getdata.js
const getDataRoutes = require('./getdata');

// Middleware to parse JSON
app.use(express.json());

// Use the routes
app.use('/api', getDataRoutes);

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
