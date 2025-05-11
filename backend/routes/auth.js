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

 
      res.json({
      token,
      user: {
        id: user._id,
        email: user.email,
        role: user.role,
        name: user.name,
        location: user.location,
        balance: user.balance,
        rating: user.rating,
        billingInfo: user.billingInfo,
        freelancerProfile: user.freelancerProfile,
        clientProfile: user.clientProfile,
        createdAt: user.createdAt
      }
    });
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
});

router.post('/signup', async (req, res) => {
  const {
    firstName,
    lastName,
    email,
    password,
    country,
    subscribe,
    role
  } = req.body;

  console.log(req.body);
  if (!email || !password || !firstName || !lastName || !role) {
    return res.status(400).json({ message: 'Missing required fields' });
  }

  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) return res.status(409).json({ message: 'Email already in use' });

    const hashedPassword = await bcrypt.hash(password, 10);
    console.log("here reached");
    const user = new User({
      email,
      password: hashedPassword,
      role,
      name: `${firstName} ${lastName}`,
      location: country,
      createdAt: new Date()
    });

    await user.save();

    res.status(201).json({
      message: 'Signup successful',
      user: {
        id: user._id,
        email: user.email,
        role: user.role,
        name: user.name
      }
    });
  } catch (error) {

    console.error('Signup error:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});


module.exports = router;
