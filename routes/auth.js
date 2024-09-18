const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/user');
const dotenv = require('dotenv');

dotenv.config();
// JWT Secret key
if (!jwtSecret) {
  console.error('JWT_SECRET is not defined in environment variables.');
}

// Middleware to verify token and extract userId
const verifyToken = (req, res, next) => {
  const token = req.headers['authorization']?.split(' ')[1];
  if (!token) return res.status(401).json({ message: 'No token provided' });

  jwt.verify(token, jwtSecret, (err, decoded) => {
    if (err) return res.status(401).json({ message: 'Invalid token' });
    req.userId = decoded.id;
    next();
  });
};

// @route  POST /api/auth/signup
// @desc   Register a new user
router.post('/signup', async (req, res) => {
  const { username, email, password } = req.body;

  if (!username || !email || !password) {
    return res.status(400).json({ msg: 'Please provide all required fields' });
  }

  try {
    // Check if user exists
    let user = await User.findOne({ email });
    if (user) return res.status(400).json({ msg: 'User already exists' });

    // Create new user instance
    const newUser = new User({ username, email, password });

    // Hash password
    const salt = await bcrypt.genSalt(10);
    newUser.password = await bcrypt.hash(password, salt);

    // Save user to DB
    await newUser.save();

    // Return JWT token
    const token = jwt.sign({ id: newUser._id }, jwtSecret, { expiresIn: '1h' });
    res.json({ token });
  } catch (err) {
    console.error('Error during signup:', err);
    res.status(500).json({ msg: 'Server error' });
  }
});

// @route  POST /api/auth/login
// @desc   Authenticate user and get token
router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ msg: 'Please provide all required fields' });
  }

  try {
    // Check if user exists
    let user = await User.findOne({ email });
    if (!user) return res.status(400).json({ msg: 'Invalid credentials' });

    // Compare passwords
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ msg: 'Invalid credentials' });

    // Return JWT token
    const token = jwt.sign({ id: user._id }, jwtSecret, { expiresIn: '1h' });
    res.json({ token });
  } catch (err) {
    console.error('Error during login:', err);
    res.status(500).json({ msg: 'Server error' });
  }
});

// @route  POST /api/auth/change-password
// @desc   Change user password
router.post('/change-password', verifyToken, async (req, res) => {
  const { currentPassword, newPassword, confirmPassword } = req.body;

  if (!currentPassword || !newPassword || !confirmPassword) {
    return res.status(400).json({ message: 'Please provide all required fields' });
  }

  if (newPassword !== confirmPassword) {
    return res.status(400).json({ message: 'New passwords do not match' });
  }

  try {
    // Find user by userId
    let user = await User.findById(req.userId);
    if (!user) return res.status(404).json({ message: 'User not found' });

    // Compare current password
    const match = await bcrypt.compare(currentPassword, user.password);
    if (!match) return res.status(400).json({ message: 'Current password is incorrect' });

    // Check new password length
    if (newPassword.length < 6) return res.status(400).json({ message: 'New password is too short' });

    // Hash new password
    const hashedPassword = await bcrypt.hash(newPassword, 10);
    user.password = hashedPassword;
    await user.save();

    res.status(200).json({ message: 'Password changed successfully' });
  } catch (error) {
    console.error('Error changing password:', error);
    res.status(500).json({ message: 'Server error' });
  }
});
module.exports = router;
