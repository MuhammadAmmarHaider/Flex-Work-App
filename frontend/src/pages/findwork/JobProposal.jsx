import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

import JobDetails from './JobDetails';
import TermsCard from './TermsCard';
import AdditionalDetails from './AdditionalDetails';

function JobProposal() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [job, setJob] = useState(null);
  const [amount, setAmount] = useState('');
  const [duration, setDuration] = useState('');
  const [coverletter, setCoverletter] = useState('');

  const applicantId = localStorage.getItem('userId');

  useEffect(() => {
    async function fetchJob() {
      try {
        const response = await axios.get('/jobs');
        const allJobs = response.data || [];
        const foundJob = allJobs.find((j) => j._id === id || j.id === id);
        if (foundJob) {
          setJob(foundJob);
        } else {
          console.warn('Job not found');
        }
      } catch (err) {
        console.error('Error fetching job:', err);
      }
    }

    fetchJob();
  }, [id]);

  const handleSubmitProposal = async (e) => {
    e.preventDefault();

    if (!job || !amount || !duration.trim() || !coverletter.trim()) {
      alert('Please fill in all fields.');
      return;
    }

    const proposalData = {
      jobId: job._id || job.id,
      applicantId,
      coverLetter: coverletter.trim(),
      bid: {
        amount: parseFloat(amount),
        type: job.budget?.paymentType || 'N/A',
      },
      duration: duration.trim(),
    };

    try {
      const response = await axios.post('/api/proposals', proposalData);
      if (response.status === 201) {
        alert('Proposal submitted successfully!');
        navigate('/');
      }
    } catch (error) {
      console.error('Error submitting proposal:', error);
      alert('Failed to submit proposal.');
    }
  };

  const handleClickCancel = (e) => {
    e.preventDefault();
    navigate(-1); // Navigate to previous page
  };

  if (!job) {
    return <p className="text-center mt-20 text-4xl">Loading job...</p>;
  }

  return (
    <div className="mx-20">
      <h1 className="text-7xl font-semibold my-16">Submit a proposal</h1>

      <JobDetails job={job} />
      <TermsCard
        amount={amount}
        setAmount={setAmount}
        duration={duration}
        setDuration={setDuration}
      />
      <AdditionalDetails
        coverletter={coverletter}
        setCoverletter={setCoverletter}
      />

      <div className="flex items-center gap-10 text-4xl my-10">
        <button
          onClick={handleSubmitProposal}
          className="bg-primary hover:bg-primaryHover text-white p-6 rounded-lg"
        >
          Submit proposal
        </button>
        <button
          onClick={handleClickCancel}
          className="bg-white hover:text-primaryHover text-primary p-6 border-2 border-primary rounded-lg"
        >
          Cancel
        </button>
      </div>
    </div>
  );
}

export default JobProposal;
