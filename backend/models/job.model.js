const mongoose = require("mongoose")

const jobSchema = new mongoose.Schema({
  title: { type: String, required: true },
  postedTime: String,
  location: String,
  type: String,
  roleType: String,
  budget: {
    amount: Number,
    paymentType: { type: String, enum: ['Hourly', 'Fixed'] },
    experienceLevel: { type: String, enum: ['Beginner', 'Intermediate', 'Senior'] }
  },
  estimatedDuration: { type: String, enum: ['More than 6 months', '3 to 6 months', '1 to 3 months', 'Less than 1 month'] },
  workload: String,
  description: String,
  skills: [String],
  clientId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }
});

const Job = mongoose.model('Job',jobSchema);
module.exports = Job;
