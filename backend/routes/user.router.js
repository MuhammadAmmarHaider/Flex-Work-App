const express = require('express');
const auth = require("../middleware/auth");

const router = express.Router();
const {
  getUsers,
  getUserById,
  createUser,
  updateUser,
  patchUser,
  getSavedJobs,
  saveJob
} = require('../controllers/user.controller');

router.get('/', auth, getUsers);
router.get('/:id', auth, getUserById);
router.post('/', auth, createUser);
router.put('/:id', auth, updateUser);
router.patch('/:id', auth, patchUser);
router.get('/:userId/saved-jobs', auth, getSavedJobs);
router.post('/save-job', auth, saveJob);


module.exports = router;
