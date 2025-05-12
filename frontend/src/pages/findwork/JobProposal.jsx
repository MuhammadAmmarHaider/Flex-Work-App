
import React,{useState,useEffect} from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import JobDetails from './JobDetails';
import TermsCard from './TermsCard';
import AdditionalDetails from './AdditionalDetails';
import axios from 'axios';

function JobProposal() {
  const {id} = useParams();
  const navigate = useNavigate();
  const [amount, setAmount] = useState(0.0);
  const [duration, setDuration] = useState('');
  const [coverletter,setCoverletter] = useState("");
  const[job,setJob] = useState({});

     const applicantId = localStorage.getItem('userId');
  
useEffect(() => {
  async function fetchJob() {
    const token = localStorage.getItem('token');

    try {
      const response = await axios.get(`http://localhost:5000/jobs/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });

      const foundJob = response.data;
      // const foundJob = allJobs.find((j) => j._id === id || j.id === id);

      if (!foundJob) {
        alert("Job not found.");
        return;
      }
      setJob(foundJob);
    } catch (err) {
      console.error('Error fetching job:', err);
    }
  }

  fetchJob();
}, [id]);


const token = localStorage.getItem('token');
  async function handleSubmitProposal(e) {
    e.preventDefault();

    if (!job || !amount || !duration || !coverletter) {
      alert('Please fill in all fields.');
      return;
    }
    try {
const proposalData = {
  jobId: id, // Make sure this is NOT undefined
  applicantId: applicantId,
  coverLetter: coverletter,
  bid: {
    amount: parseFloat(amount),
    type: job.budget?.paymentType || 'Fixed Price'
  },
  duration: duration,
};



      const response = await axios.post(
  'http://localhost:5000/proposals',
  proposalData,
  {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }
);

      if (response.status === 201) {
        alert('Proposal submitted successfully!');
        navigate('/');
      }
    } catch (error) {
      console.error('Error submitting proposal:', error);
      alert('Failed to submit proposal.');
    }
  }

  function handleClickCancel(e) {
    e.preventDefault();
    navigate('/');
  }

  return (
    job && (
      <div className='mx-20'>
        <h1 className='text-7xl font-semibold my-16'>Submit a proposal</h1>
        <JobDetails job={job} />
        <TermsCard amount={amount} setAmount={setAmount} duration={duration} setDuration={setDuration}/>
        <AdditionalDetails coverletter={coverletter} setCoverletter={setCoverletter}/>
        <div className='flex items-center gap-10 text-4xl my-10'>
          <button onClick={handleSubmitProposal} className='bg-primary hover:bg-primaryHover text-white p-6 rounded-lg'>
            Submit proposal
          </button>
          <button onClick={handleClickCancel} className='bg-white hover:text-primaryHover text-primary p-6 border-2 border-solid border-primary rounded-lg'>
            Cancel
          </button>
        </div>
      </div>
    )
  );
  
}


export default JobProposal