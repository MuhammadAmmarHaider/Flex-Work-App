import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

const AdminRoute = ({ element }) => {
    const userRole = useSelector((state) => state.user.role);
    return userRole === 'admin' ? element : <Navigate to="/" />;
};

export default AdminRoute;
