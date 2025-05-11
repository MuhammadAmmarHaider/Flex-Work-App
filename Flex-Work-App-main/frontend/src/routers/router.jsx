import { createBrowserRouter } from "react-router-dom";
import App from "../App";

import FindWork from "../pages/findwork/FindWork";
import JobProposal from "../pages/findwork/JobProposal";
import FindTalent from "../pages/findtalent/FindTalent";
import JobPost from "../pages/findtalent/JobPost";
import WhyFlexwork from "../pages/whyflexwork/WhyFlexwork";
import Login from "../pages/login";
import Signup from "../pages/Signup";
import SavedJobs from "../pages/findwork/SavedJobs";
import FreelancerProposals from "../pages/proposals/FreelancerProposals";
import ProposalDetails from "../components/ProposalDetails";
import AllJobPosts from "../pages/findtalent/AllJobPosts";
import ClientLanding from "../pages/landing/ClientLanding";
import LandingRouter from "../pages/landing/LandingRouter";
import ClientProposals from "../pages/proposals/ClientProposals";
import ClientProfile from "../pages/profile/ClientProfile";
import FreelancerProfile from "../pages/profile/FreelancerProfile";
import Profile from "../pages/profile/Profile";


const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            //add other routes here
            {
                path: '/',
                element: <LandingRouter />
            },
            {
                path:'/find-work',
                element:<FindWork/>,
            },
            {
                path:'apply-job/:id',
                element:<JobProposal/>
            },
            {
                path:'/find-talent',
                element:<FindTalent/>
            },
            {
                path:'/post-job',
                element:<JobPost/>
            },
            {
                path:'/why-flexwork',
                element:<WhyFlexwork/>
            },
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/signup',
                element:  <Signup/>
            },
            {
                path:'/saved-jobs',
                element:<SavedJobs/>
            },
            {
                path:'/freelancer-proposals',
                element:<FreelancerProposals/>
            },
            {
                path:'/proposal-details/:id',
                element:<ProposalDetails/>
            },
            {
                path:'/all-jobs',
                element: <AllJobPosts/>
            },
            {
                path:'/client-proposals',
                element:<ClientProposals/>
            },
            {
                path:'/profile',
                element:<Profile/>
            }

        ]
    }
])

export default router;