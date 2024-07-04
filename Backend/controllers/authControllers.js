const jwt = require('jsonwebtoken');
const { User } = require('../models');
const { validationResult } = require('express-validator');

// Function to handle user registration
exports.register = async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await User.create({ username, password });
    const token = jwt.sign({ userId: user.id }, 'your_secret_key', { expiresIn: '1h' });
    res.status(201).json({ user: { id: user.id, username: user.username }, token });
  } catch (error) {
    console.error('Error in user registration:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

// Function to handle user login
exports.login = async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ where: { username } });
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    const isPasswordValid = await user.comparePassword(password);
    if (!isPasswordValid) {
      return res.status(401).json({ message: 'Invalid password' });
    }
    const token = jwt.sign({ userId: user.id }, 'your_secret_key', { expiresIn: '1h' });
    res.json({ user: { id: user.id, username: user.username }, token });
  } catch (error) {
    console.error('Error in user login:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};