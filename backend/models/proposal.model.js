
const mongoose = require("mongoose")

const proposalSchema = new mongoose.Schema({
  jobId: { type: mongoose.Schema.Types.ObjectId, ref: 'Job', required: true },
  applicantId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  coverLetter: String,
  bid: {
    amount: Number,
    type: { type: String, enum: ['Hourly', 'Fixed Price'] }
  },
  submittedAt: { type: Date, default: Date.now },
  status: { type: String, enum: ['pending', 'accepted', 'rejected', 'withdrawn'], default: 'pending' },
  duration: { type: String, enum: ['More than 6 months', '3 to 6 months', '1 to 3 months', 'Less than 1 month'] }
});

const Proposal = mongoose.model('Proposal', proposalSchema);

module.exports = Proposal;