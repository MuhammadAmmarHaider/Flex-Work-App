<<<<<<< HEAD:Flex-Work-App-main/frontend/src/pages/proposals/ClientProposals.jsx
import React from 'react'
import proposals from '../../DummyProposals'
import { Link } from 'react-router-dom'

function ClientProposals() {

    return (
        <div className='m-20'>
            <h3 className='text-7xl font-semibold my-20 bg-primary text-white py-24 px-8 rounded-3xl'>My proposals</h3>
            <ul>
                {
                    proposals.map((proposal) => {
                        return (<li key={proposal.title} className='border-2 border-black border-solid text-3xl p-16 my-8 rounded-2xl flex items-start justify-between hover:bg-[#E8F5E9] '>
                            <div className='flex items-center gap-x-12'>
                                <p className='text-[#676767]'><b>Initiated:</b> {proposal.timePosted}</p>
                                <Link to={`/proposal-details/${proposal.id}`}><h5 className='text-primaryHover hover:text-primary underline font-semibold'>{proposal.title}</h5></Link>
                            </div>
                            <div>
                                <p className='text-[#676767]'><b>Status:</b> {proposal.status}</p>
                            </div>
                        </li>)
                    })
                }
            </ul>
        </div>
    )
}

export default ClientProposals;
=======
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function ClientProposals() {
    const [proposals, setProposals] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const clientId = localStorage.getItem('clientId');

    useEffect(() => {
        const fetchProposals = async () => {
            try {
                const response = await axios.get(`http://localhost:5000/api/proposals/client/${clientId}`);
                setProposals(response.data);
                setLoading(false);
            } catch (err) {
                setError('Failed to load proposals.');
                setLoading(false);
            }
        };

        if (clientId) {
            fetchProposals();
        } else {
            setError('No client ID found.');
            setLoading(false);
        }
    }, [clientId]);

    return (
        <div className='m-20'>
            <h3 className='text-7xl font-semibold my-20 bg-primary text-white py-24 px-8 rounded-3xl'>My proposals</h3>
                  {loading && <p>Loading...</p>}
                    {error && <p className='text-red-500'>{error}</p>}
            <ul>
                {
                    proposals.map((proposal) => (
                        <li
                            key={proposal._id}
                            className='border-2 border-black border-solid text-3xl p-16 my-8 rounded-2xl flex items-start justify-between hover:bg-[#E8F5E9]'
                        >
                            <div className='flex items-center gap-x-12'>
                                <p className='text-[#676767]'><b>Initiated:</b> {new Date(proposal.submittedAt).toLocaleDateString()}</p>
                                <Link to={`/proposal-details/${proposal._id}`}>
                                    <h5 className='text-primaryHover hover:text-primary underline font-semibold'>
                                        Proposal for Job #{proposal.jobId}
                                    </h5>
                                </Link>
                            </div>
                            <div>
                                <p className='text-[#676767]'><b>Status:</b> {proposal.status}</p>
                            </div>
                        </li>
                    ))
                }
            </ul>
        </div>
    );
}

export default ClientProposals;
>>>>>>> cbd0a131a4dcf32a52c69902999e0a4fc7ade991:frontend/src/pages/proposals/ClientProposals.jsx
