const express = require('express');
const {
  getJobs,
  getJobById,
  createJob,
  updateJob,
  patchJob
} = require('../controllers/job.controller');

const router = express.Router();

router.get('/',getJobs) ; 
router.post('/',createJob);  
router.get('/:id',getJobById)
router.put("/:id",updateJob)
router.patch("/:id",patchJob)


module.exports = router;
