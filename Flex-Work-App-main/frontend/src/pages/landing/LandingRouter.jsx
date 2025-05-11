import React from 'react'
import {useSelector} from 'react-redux'
import Home from '../home/Home'
import FindWork from '../findwork/FindWork';
import ClientLanding from './ClientLanding';

function LandingRouter() {

    const user = useSelector((state) => state.user);

      if (user.role === "freelancer") {
        return <FindWork />;
      }
    
      if (user.role === "client") {
        return <ClientLanding />;
      }
      return <Home />;
  
}

export default LandingRouter