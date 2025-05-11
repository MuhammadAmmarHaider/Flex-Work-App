<<<<<<< HEAD:Flex-Work-App-main/backend/routes/job.router.js
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
=======
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
>>>>>>> cbd0a131a4dcf32a52c69902999e0a4fc7ade991:backend/routes/job.router.js
