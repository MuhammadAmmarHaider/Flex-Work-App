import React from 'react'
import JobDetails from '../pages/findwork/JobDetails'
import posts from "../DummyData"
import proposals from "../DummyProposals"

import { useParams } from 'react-router-dom';


function ProposalDetails() {
  const { id } = useParams();
  console.log("id is ", id);
  const proposal = proposals.find((p) => p.id === id);

  const applicationData = {
    jobId: "1",
    applicantId: "23",
    coverLetter: `Dear Hiring Manager,
      
      I am very excited to apply for this position. With over 3 years of experience in frontend development using React, Tailwind CSS, and Redux, I’ve built responsive web apps and contributed to several successful product launches. I take pride in writing clean, maintainable code and collaborating closely with cross-functional teams.
      
      I’m confident that I can help deliver a high-quality product for your team. Thank you for considering my application.
      
      Best regards,
      John Doe`,
    bid: {
      amount: 25, // hourly rate in dollars
      type: "Hourly", // could also be "Fixed"
    },
    submittedAt: "2025-05-01T10:45:00Z"
  };

  const job = posts.find((post) => {
    return post.id === proposal.jobId;
  });

  function handleWithdrawProposal(e) {
    e.preventDefault();

  }
  function handleCancel(e) {
    e.preventDefault();
  }

  return (
    <div className='mx-20 my-12'>
      {job && (
        <div>
          <JobDetails job={job} />
          <div className='text-4xl my-16'>
            <div className='flex items-center justify-between my-6'>
              <h5 className='font-semibold text-5xl'>Your proposed terms</h5>
              <p className='text-[#676767]'>Clients budget: ${job.budget.amount}</p>
            </div>
            <div className='my-6'>
              <h6 className='font-semibold'>Total price of project</h6>
              <p className='text-[#676767] text-3xl my-5'>This includes all milestones, and is the amount your client will see.</p>
              <p>${applicationData.bid.amount}</p>
            </div>
            <hr className='text-[#676767] my-6' />
            <div className='my-6'>
              <h6 className='font-semibold'>You'll receive</h6>
              <p className='text-[#676767] text-3xl my-5'>The estimated payment, after service fees.</p>
              <p>${applicationData.bid.amount * .9}</p>
            </div>
          </div>
          <div className='text-3xl my-16'>
            <h5 className='text-5xl font-semibold my-6'>Cover Letter</h5>
            <p>{applicationData.coverLetter}</p>
          </div>
          <div className='flex items-center gap-16 text-4xl my-20'>
            <button onClick={handleWithdrawProposal} className='bg-primary hover:bg-primaryHover text-white p-6 rounded-lg'>
              Withdraw proposal
            </button>
            <button onClick={handleCancel} className='bg-white hover:text-primaryHover hover:bg-[#E8F5E9] text-primary p-6 border-2 border-solid border-primary rounded-lg'>
              Cancel
            </button>
          </div>
        </div>
      )}

    </div>
  )
}

export default ProposalDetails