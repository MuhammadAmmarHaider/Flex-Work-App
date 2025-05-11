import React from 'react'
import posts from '../../DummyData';
import SaveJobCard from '../../components/SaveJobCard';



function SavedJobs() {
    const savedJobs = posts;
  return (
    <div className='mx-auto my-10 w-11/12 '>
    <h2 className='text-7xl font-semibold my-20 bg-primary text-white py-24 px-8 rounded-3xl'>Your saved jobs</h2>
    <div className='my-12'>
        {
            savedJobs.map((post)=>{
                return  <SaveJobCard post={post}/>
            })
        }
    </div>
</div>
  )
}

export default SavedJobs