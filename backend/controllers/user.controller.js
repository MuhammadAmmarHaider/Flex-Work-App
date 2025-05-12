
const User = require('../models/user.model');
const bcrypt = require('bcrypt');

const getUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


const getUserById = async (req, res) => {
  try {
    const user = await User.findById(req.params.id); 
    if (!user) return res.status(404).json({ message: 'User not found' });
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


const createUser = async (req, res) => {
  try {
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    const newUser = new User({ ...req.body, password: hashedPassword });
    const saved = await newUser.save();
    res.status(201).json(saved);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateUser = async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    if (!user) return res.status(404).json({ message: 'User not found' });
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


const patchUser = async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true, runValidators: true }
    );
    if (!user) return res.status(404).json({ message: 'User not found' });
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getSavedJobs = async (req, res) => {
  try {
    const user = await User.findById(req.params.userId).populate('savedJobs');
    if (!user) return res.status(404).json({ error: 'User not found' });

    res.json(user.savedJobs);
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
}

const saveJob = async (req, res) => {
  console.log("inside the save job");
  const userId = req.body.userId; 
  const { jobId } = req.body;
  console.log(userId);
  if (!jobId) {
    return res.status(400).json({ error: 'Job ID is required.' });
  }

  try {
    const user = await User.findById(userId);

    if (!user) return res.status(404).json({ error: 'User not found.' });

    // Prevent duplicate job saves
    if (user.savedJobs.includes(jobId)) {
      return res.status(400).json({ message: 'Job already saved.' });
    }

    user.savedJobs.push(jobId);
    await user.save();

    res.status(200).json({ message: 'Job saved successfully.', savedJobs: user.savedJobs });
  } catch (err) {
    console.error('Error saving job:', err);
    res.status(500).json({ error: 'Internal server error.' });
  }
};


module.exports = {
  getUsers,
  getUserById,
  createUser,
  updateUser,
  patchUser,
  getSavedJobs,
  saveJob,
};
