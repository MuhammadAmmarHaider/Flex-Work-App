import React from 'react'
import {useSelector} from 'react-redux'
import FreelancerProfile from './FreelancerProfile';
import ClientProfile from './ClientProfile';


function Profile() {
  const user = useSelector((state) => state.user);
  return (
    <>
      {user.role === 'freelancer' ? (
        <FreelancerProfile />
      ) : user.role === 'client' ? (
        <ClientProfile />
      ) : (
        <p>Invalid user role</p>
      )}
    </>
  );
}

export default Profile