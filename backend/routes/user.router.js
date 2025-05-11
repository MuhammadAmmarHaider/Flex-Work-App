<<<<<<< HEAD
const express = require('express');
const router = express.Router();
const {
  getUsers,
  getUserById,
  createUser,
  updateUser,
  patchUser,
} = require('../controllers/user.controller');

router.get('/', getUsers);
router.get('/:id', getUserById);
router.post('/', createUser);
router.put('/:id', updateUser);
router.patch('/:id', patchUser);

module.exports = router;
=======
const express = require('express');
const auth = require("../middleware/auth");

const router = express.Router();
const {
  getUsers,
  getUserById,
  createUser,
  updateUser,
  patchUser,
  getSavedJobs
} = require('../controllers/user.controller');

router.get('/',auth, getUsers);          
router.get('/:id',auth, getUserById); 
router.post('/',auth, createUser);   
router.put('/:id',auth, updateUser);    
router.patch('/:id',auth, patchUser); 
router.get('/:userId/saved-jobs',auth, getSavedJobs);

module.exports = router;
>>>>>>> 94b17bf0681ccd7648c14468b2742919ae96c24c
