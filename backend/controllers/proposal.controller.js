
const Proposal = require('../models/proposal.model');
const mongoose = require("mongoose");
const Job = require("../models/job.model")

const getProposals = async (req, res) => {
    try{
        const proposals = await Proposal.find(); 
        res.status(200).json(proposals);
    } catch (error) {
        res.status(500).json({message:error.message})
    }
};


const getProposalById = async (req, res) => {
    try{
        const proposal = await Proposal.findById(req.params.id);
        if (!proposal) {
            return res.status(404).json({ message: 'Proposal not found' });
        }
        res.status(200).json(proposal);
    } catch (error) {
        res.status(500).json({message:error.message})
    }
};


const createProposal = async (req, res) => {
  try {
    console.log("here");
    console.log('Incoming proposal data:', req.body);
    const newProposal = new Proposal(req.body);
    const savedProposal = await newProposal.save();
    res.status(201).json(savedProposal);
  } catch (error) {
     res.status(500).json({message:error.message})
  }
};


const updateProposal = async (req, res) => {
  try {
    const proposal = await Proposal.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    if (!proposal) {
      return res.status(404).json({ message: 'Proposal not found' });
    }
    res.status(200).json(proposal);
  } catch (error) {
     res.status(500).json({message:error.message})
  }
};


const patchProposal = async (req, res) => {
  try {
    const proposal = await Proposal.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true, runValidators: true }
    );
    if (!proposal) {
      return res.status(404).json({ message: 'Proposal not found' });
    }
    res.status(200).json(proposal);
  } catch (error) {
     res.status(500).json({message:error.message})
  }
};

const getProposalsByClientId = async (req, res) => {
  try {
    const { clientId } = req.params;
    console.log('Client ID:', clientId);

    const clientObjectId = new mongoose.Types.ObjectId(clientId);

    const jobs = await Job.find({ clientId: clientObjectId }, '_id');
    console.log('Jobs found:', jobs);

    const jobIds = jobs.map(job => job._id);

    const proposals = await Proposal.find({ jobId: { $in: jobIds } }).populate('jobId', 'title');

    res.status(200).json(proposals);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getProposals,
  getProposalById,
  createProposal,
  updateProposal,
  patchProposal,
  getProposalsByClientId
};
