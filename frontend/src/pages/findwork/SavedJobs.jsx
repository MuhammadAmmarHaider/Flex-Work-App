
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import SaveJobCard from '../../components/SaveJobCard';

function SavedJobs() {
  const [savedJobs, setSavedJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const userId = localStorage.getItem('userId');

useEffect(() => {
  const token = localStorage.getItem('token'); // Get token from localStorage

  axios
    .get(`http://localhost:5000/users/${userId}/saved-jobs`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((res) => {
      setSavedJobs(res.data);
      setLoading(false);
    })
    .catch((err) => {
      setError('Failed to fetch saved jobs');
      console.error(err);
      setLoading(false);
    });
}, []);


  if (loading) return <div className="text-center mt-20 text-xl">Loading...</div>;
  if (error) return <div className="text-center mt-20 text-red-500">{error}</div>;

  return (
    <div className='mx-auto my-10 w-11/12'>
      <h2 className='text-7xl font-semibold my-20 bg-primary text-white py-24 px-8 rounded-3xl'>
        Your saved jobs
      </h2>
      <div className='my-12'>
        {savedJobs.length > 0 ? (
          savedJobs.map((post, index) => (
            <SaveJobCard key={index} post={post} />
          ))
        ) : (
          <div className="text-xl text-gray-600">No saved jobs found.</div>
        )}
      </div>
    </div>
  );
}

export default SavedJobs;

