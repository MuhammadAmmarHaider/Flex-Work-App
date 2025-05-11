
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, enum: ['client', 'freelancer', 'admin'], required: true },
  name: { type: String, required: true },
  location: String,
  balance: { type: Number, default: 0 },
  rating: {
    value: { type: Number, default: 0 },
    count: { type: Number, default: 0 }
  },
  billingInfo: {
    cardNumber: String,
    expiryDate: String,
    cvv: String,
    billingAddress: String
  },
  freelancerProfile: {
    title: String,
    skills: [String],
    hourlyRate: Number,
    experienceLevel: { type: String, enum: ['beginner', 'intermediate', 'senior'] },
    bio: String,
    proposals: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Proposal' }],
    workHistory: [{
      title: String,
      company: String,
      startDate: Date,
      endDate: Date,
      description: String
    }],
    education: [{
      degree: String,
      institution: String,
      startDate: Date,
      endDate: Date
    }],
    languages: [{
      name: String,
      proficiency: String
    }],
    projectsCatalog: [{
      title: String,
      description: String,
      technologies: [String]
    }]
  },
  clientProfile: {
    companyName: String,
    jobsPosted: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Job' }],
    industry: String,
    companyWebsite: String,
    description: String
  },
  savedJobs: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Job' }],
  createdAt: { type: Date, default: Date.now }
});

const User = mongoose.model('User', userSchema);
module.exports = User;
