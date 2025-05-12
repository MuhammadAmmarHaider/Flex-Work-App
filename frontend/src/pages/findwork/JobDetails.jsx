import React from 'react'

function JobDetails({job}) {

  return (
    <div className='border-solid border-[#676767] border-2 my-10'>
        <div className='px-20 py-5'>
            <h2 className='text-6xl font-semibold my-12'>Job details</h2>
            <h3 className='text-5xl font-semibold my-12'>{job.title}</h3>
            <div className='flex gap-12 items-center my-12'>
                <p className='rounded-full bg-[#d9d9d9] px-6 py-2 text-3xl'>{job.roleType}</p>
                <p className='p-4 text-3xl'>{job.postedTime}</p>
            </div>
            <div className='text-3xl my-12'>
                <p>{job.description}</p>
            </div>
            <div className='text-3xl my-12'>
                <p className='my-4'>You will need:</p>
                <ul className='list-decimal ml-8'>
                    {
                        job.scopeOfWork?.map((work,index)=>{
                            return <li key={index}>{work}</li>
                        })
                    }
                </ul>
            </div>

            <hr className='px-20 mb-8'/>
            <div className='text-3xl'>
                <h3 className='text-4xl font-semibold'>Skills and expertise</h3>
                    <ul className="flex gap-4 items-center flex-nowrap my-12">
                        {
                            job.skills?.map((skill) => (
                                <li key={skill} className="bg-[#d9d9d9] px-6 py-3 rounded-full whitespace-nowrap">{skill}</li>
                        ))}
                    </ul>
            </div>
        </div>

    </div>
  )
}

export default JobDetails