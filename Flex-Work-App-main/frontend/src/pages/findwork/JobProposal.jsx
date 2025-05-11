import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import JobDetails from './JobDetails';
import TermsCard from './TermsCard';
import AdditionalDetails from './AdditionalDetails';
import posts from '../../DummyData';

function JobProposal() {
  const {id} = useParams();
  const navigate = useNavigate();

  const job = posts.find((post) => post.id === id);

  function handleSubmitProposal(e)
  {
    e.preventDefault();

  }
  function handleClickCancel(e)
  {
    e.preventDefault();
    navigate('');
  }

  return (
    job && (
      <div className='mx-20'>
        <h1 className='text-7xl font-semibold my-16'>Submit a proposal</h1>
        <JobDetails job={job} />
        <TermsCard />
        <AdditionalDetails />
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