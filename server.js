const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const getDataRoutes = require('./routes/getdata');
const authRoutes = require('./routes/auth');

// Initialize Express app
const app = express();

// Load environment variables
dotenv.config();

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log('MongoDB connection error:', err));

// Middleware to parse JSON
app.use(express.json());

// Use routes
app.use('/api', getDataRoutes);
app.use('/api/auth', authRoutes);

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
