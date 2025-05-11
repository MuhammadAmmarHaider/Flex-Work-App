const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/user.model');

const JWT_SECRET = process.env.JWT_SECRET || 'secretkey';


router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
 
    const user = await User.findOne({ email });
    if (!user) return res.status(404).json({ message: 'User not found' });

    
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(401).json({ message: 'Invalid credentials' });

    const token = jwt.sign({ id: user._id, role: user.role }, JWT_SECRET, { expiresIn: '1h' });

 
    res.json({ token, user: { id: user._id, email: user.email, role: user.role, name: user.name } });
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
