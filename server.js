const express = require('express');
const serverless = require('serverless-http'); // Convert express app to Lambda handler
const app = express();
const port = 3000;

// Import routes
const getDataRoutes = require('./getdata');

app.use(express.json());
app.use('/api', getDataRoutes);

// Export the handler for Netlify
module.exports.handler = serverless(app);
