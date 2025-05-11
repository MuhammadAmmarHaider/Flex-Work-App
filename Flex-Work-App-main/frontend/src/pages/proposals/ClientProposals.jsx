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