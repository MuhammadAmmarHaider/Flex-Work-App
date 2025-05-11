import React, { useState } from 'react';
import dummyUser from '../../dummyUser';
import posts from '../../DummyData';

const AdminDashboard = ({ section }) => {
    const [users, setUsers] = useState(dummyUser);
    const [jobs, setJobs] = useState(posts);
    const [searchTerm, setSearchTerm] = useState('');

    const handleDeleteUser = (id) => {
        setUsers(users.filter(user => user._id !== id));
    };

    const handleDeleteJob = (id) => {
        setJobs(jobs.filter(job => job.id !== id));
    };

    const filteredClients = users.filter(user => user.role === 'client' && user.name.toLowerCase().includes(searchTerm.toLowerCase()));
    const filteredFreelancers = users.filter(user => user.role === 'freelancer' && user.name.toLowerCase().includes(searchTerm.toLowerCase()));
    const filteredJobs = jobs.filter(job => job.title.toLowerCase().includes(searchTerm.toLowerCase()));

    return (
        <div className="p-6 bg-gray-100 min-h-screen">
            <h1 className="text-2xl font-bold mb-4">Admin Dashboard</h1>

            <input
                type="text"
                placeholder="Search..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="mb-4 p-2 border rounded w-full"
            />

            {section === 'clients' && (
                <section className="mb-8">
                    <h2 className="text-3xl font-semibold mb-2">Clients</h2>
                    <div className="bg-white shadow-md rounded p-4">
                        {filteredClients.map(client => (
                            <div key={client._id} className="flex justify-between items-center border-b py-2">
                                <div>
                                    <p className="font-medium">{client.name} ({client.role})</p>
                                    <p className="-2xl text-gray-600">{client.email}</p>
                                </div>
                                <button
                                    onClick={() => handleDeleteUser(client._id)}
                                    className="text-red-500 hover:underline">
                                    Delete
                                </button>
                            </div>
                        ))}
                    </div>
                </section>
            )}

            {section === 'freelancers' && (
                <section className="mb-8">
                    <h2 className="text-3xl font-semibold mb-2">Freelancers</h2>
                    <div className="bg-white shadow-md rounded p-4">
                        {filteredFreelancers.map(freelancer => (
                            <div key={freelancer._id} className="flex justify-between items-center border-b py-2">
                                <div>
                                    <p className="font-medium">{freelancer.name} ({freelancer.role})</p>
                                    <p className="-2xl text-gray-600">{freelancer.email}</p>
                                </div>
                                <button
                                    onClick={() => handleDeleteUser(freelancer._id)}
                                    className="text-red-500 hover:underline">
                                    Delete
                                </button>
                            </div>
                        ))}
                    </div>
                </section>
            )}

            {section === 'jobs' && (
                <section className="mb-8">
                    <h2 className="text-3xl font-semibold mb-2">Jobs</h2>
                    <div className="bg-white shadow-md rounded p-4">
                        {filteredJobs.map(job => (
                            <div key={job.id} className="flex justify-between items-center border-b py-2">
                                <div>
                                    <p className="font-medium">{job.title}</p>
                                    <p className="-2xl text-gray-600">{job.location} - {job.type}</p>
                                </div>
                                <button
                                    onClick={() => handleDeleteJob(job.id)}
                                    className="text-red-500 hover:underline">
                                    Delete
                                </button>
                            </div>
                        ))}
                    </div>
                </section>
            )}
        </div>
    );
};

export default AdminDashboard;