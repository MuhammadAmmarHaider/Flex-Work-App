import React from 'react';
import { Link } from 'react-router-dom';

const AdminNav = () => {
    return (
        <nav className="bg-gray-800 text-white p-4">
            <ul className="flex space-x-4">
                <li>
                    <Link to="/admin/clients" className="hover:underline">Clients</Link>
                </li>
                <li>
                    <Link to="/admin/freelancers" className="hover:underline">Freelancers</Link>
                </li>
                <li>
                    <Link to="/admin/jobs" className="hover:underline">Jobs</Link>
                </li>
            </ul>
        </nav>
    );
};

export default AdminNav;
