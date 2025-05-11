
import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import JobDetails from './JobDetails';
import TermsCard from './TermsCard';
import AdditionalDetails from './AdditionalDetails';

function JobProposal() {
  const {id} = useParams();
  const navigate = useNavigate();
  const [amount, setAmount] = useState(0.0);
  const [duration, setDuration] = useState('');
  const [coverletter,setCoverletter] = useState("");

     const applicantId = localStorage.getItem('userId');
  
    useEffect(() => {
    async function fetchJob() {
      try {
        const response = await axios.get('/jobs');
        const allJobs = response.data;
        const foundJob = allJobs.find((j) => j._id === id || j.id === id);
        setJob(foundJob);
      } catch (err) {
        console.error('Error fetching job:', err);
      }
    }

    fetchJob();
  }, [id]);

  async function handleSubmitProposal(e) {
    e.preventDefault();

    if (!job || !amount || !duration || !coverletter) {
      alert('Please fill in all fields.');
      return;
    }

    try {
      const proposalData = {
        jobId: job._id || job.id,
        applicantId: applicantId,
        coverLetter: coverletter,
        bid: {
          amount: parseFloat(amount),
          type: job.budget.paymentType
        },
        duration: duration
      };

      const response = await axios.post('/api/proposals', proposalData);

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
    navigate('');
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