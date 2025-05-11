const Job = require('../models/job.model');

// we can populate it so that make it equavilient to our dummy data which includes some of the clients info in job.
// const getJobs = async (req, res) => {
//     try {
//         const jobs = await Job.find();
//         res.status(200).json(jobs);
//     } catch (error) {
//         res.status(500).json({message:error.message})
//     }
// };
const getJobs = async (req, res) => {
  try {
    const jobs = await Job.find().populate('clientId'); // populates user data

    const enrichedJobs = jobs.map(job => {
      const client = job.clientId;

      return {
        ...job._doc, // spreads job fields
        client: {
          clientRating: client?.rating?.value || null,
          clientSpent: client?.clientProfile?.spent || null,
          clientLocation: client?.location || null,
          paymentVerified: !!client?.billingInfo?.cardNumber
        }
      };
    });

    res.status(200).json(enrichedJobs);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


const getJobById = async (req, res) => {
    try{
        const job = await Job.findById(req.params.id);
        if (!job) {
            res.status(404);
            throw new Error('Job not found');
        }
        res.status(200).json(job);
    } catch (error) {
        res.status(500).json({message:error.message})
    }
};


const createJob = async (req, res) => {
    try{
        const job = new Job(req.body);
        const createdJob = await job.save();
        res.status(201).json(createdJob);
    } catch (error) {
        res.status(500).json({message:error.message})
    }
};


const updateJob = async (req, res) => {
    try{
        const job = await Job.findByIdAndUpdate(req.params.id, req.body);
        if (!job) {
            res.status(404);
            throw new Error('Job not found');
        }
        res.status(200).json(job);
    } catch (error) {
        res.status(500).json({message:error.message})
    }
};


const patchJob = async (req, res) => {
    try{
        const job = await Job.findByIdAndUpdate(req.params.id, req.body);
        if (!job) {
            res.status(404);
            throw new Error('Job not found');
        }
        res.status(200).json(job);
    } catch (error) {
        res.status(500).json({message:error.message})
    }
};

const getJobsByClientId = async (req, res) => {
    try {
        const { clientId } = req.params;
        const jobs = await Job.find({ clientId });
        res.status(200).json(jobs);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


module.exports = {
  getJobs,
  getJobById,
  createJob,
  updateJob,
  patchJob,
  getJobsByClientId
};
