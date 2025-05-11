import React, { useEffect, useState } from 'react';
import axios from 'axios';
import PostedJob from '../../components/PostedJob';

function AllJobPosts() {
  const [savedJobs, setSavedJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const clientId = localStorage.getItem('userId');

    if (!clientId) {
      setError('User not logged in.');
      setLoading(false);
      return;
    }

    axios.get(`http://localhost:5000/jobs/client/${clientId}`)
      .then(response => {
        setSavedJobs(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error("Error fetching client jobs:", error);
        setError('Failed to fetch jobs.');
        setLoading(false);
      });
  }, []);

  return (
    <div className='mx-auto my-10 w-11/12'>
      <h2 className='text-7xl font-semibold my-20 bg-primary text-white py-24 px-8 rounded-3xl'>
        Your posted jobs
      </h2>

      {loading && <p>Loading...</p>}
      {error && <p className='text-red-500'>{error}</p>}

      <div className='my-12'>
        {savedJobs.map(post => (
          <PostedJob key={post._id} post={post} />
        ))}
      </div>
    </div>
  );
}

export default AllJobPosts;
