import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function FreelancerProposals() {
  const [proposals, setProposals] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchProposals = async () => {
      const token = localStorage.getItem('token');
      const clientId = localStorage.getItem('userId');

      try {
        const response = await axios.get(`http://localhost:5000/proposals/client/${clientId}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        setProposals(response.data);
      } catch (err) {
        setError('Failed to fetch proposals');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchProposals();
  }, []);

  if (loading) return <div className='text-center mt-20 text-xl'>Loading...</div>;
  if (error) return <div className='text-center mt-20 text-red-500'>{error}</div>;

  return (
    <div className='m-20'>
      <h3 className='text-7xl font-semibold my-20 bg-primary text-white py-24 px-8 rounded-3xl'>
        My proposals
      </h3>
      <ul>
        {proposals.length > 0 ? (
          proposals.map((proposal) => (
            <li
              key={proposal._id}
              className='border-2 border-black border-solid text-3xl p-16 my-8 rounded-2xl flex items-start justify-between hover:bg-[#E8F5E9]'
            >
              <div className='flex items-center gap-x-12'>
                <p className='text-[#676767]'>
                  <b>Initiated:</b> {new Date(proposal.createdAt).toLocaleDateString()}
                </p>
                <Link to={`/proposal-details/${proposal._id}`}>
                  <h5 className='text-primaryHover hover:text-primary underline font-semibold'>
                    {proposal.jobId?.title || 'Untitled Job'}
                  </h5>
                </Link>
              </div>
              <div>
                <p className='text-[#676767]'>
                  <b>Status:</b> {proposal.status}
                </p>
              </div>
            </li>
          ))
        ) : (
          <div className='text-xl text-gray-600'>No proposals found.</div>
        )}
      </ul>
    </div>
  );
}

export default FreelancerProposals;
