const express = require('express');
const auth = require("../middleware/auth");
const {
  getJobs,
  getJobById,
  createJob,
  updateJob,
  patchJob,
  getJobsByClientId,
} = require('../controllers/job.controller');

const router = express.Router();

router.get('/',auth,getJobs) ; 
router.post('/',auth,createJob);  
router.get('/:id',auth,getJobById)
router.put("/:id",auth,updateJob)
router.patch("/:id",auth,patchJob)
router.get('/client/:clientId',auth, getJobsByClientId);


module.exports = router;
