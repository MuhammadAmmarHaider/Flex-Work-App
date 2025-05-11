import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import FindWork from "../pages/findwork/FindWork";
import JobProposal from "../pages/findwork/JobProposal";
import FindTalent from "../pages/findtalent/FindTalent";
import JobPost from "../pages/findtalent/JobPost";
import WhyFlexwork from "../pages/whyflexwork/WhyFlexwork";
import Login from "../pages/signupLogin/login";
import Signup from "../pages/signupLogin/SignUserType";
import SavedJobs from "../pages/findwork/SavedJobs";
import FreelancerProposals from "../pages/proposals/FreelancerProposals";
import ProposalDetails from "../components/ProposalDetails";
import AllJobPosts from "../pages/findtalent/AllJobPosts";
import ClientLanding from "../pages/landing/ClientLanding";
import LandingRouter from "../pages/landing/LandingRouter";
import ClientProposals from "../pages/proposals/ClientProposals";
import Profile from "../pages/profile/Profile";
import SignupForm from '../pages/signupLogin/SignupForm';
import AdminDashboard from "../pages/Admin/AdminDashboard";
import AdminRoute from './AdminRoute';
import Messages from "../pages/messages/Messages";

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: '/',
                element: <LandingRouter />
            },
            {
                path: '/find-work',
                element: <FindWork />,
            },
            {
                path: 'apply-job/:id',
                element: <JobProposal />
            },
            {
                path: '/find-talent',
                element: <FindTalent />
            },
            {
                path: '/post-job',
                element: <JobPost />
            },
            {
                path: '/why-flexwork',
                element: <WhyFlexwork />
            },
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/signup',
                element: <Signup />
            },
            {
                path: '/signup/:userType',
                element: <SignupForm />
            },
            {
                path: '/saved-jobs',
                element: <SavedJobs />
            },
            {
                path: '/freelancer-proposals',
                element: <FreelancerProposals />
            },
            {
                path: '/proposal-details/:id',
                element: <ProposalDetails />
            },
            {
                path: '/all-jobs',
                element: <AllJobPosts />
            },
            {
                path: '/client-proposals',
                element: <ClientProposals />
            },
            {
                path: '/profile',
                element: <Profile />
            },
            {
                path: '/messages',
                element: <Messages />
            },
            {
                path: '/admin/dashboard',
                element: <AdminRoute element={<AdminDashboard />} />
            },
            {
                path: '/admin/clients',
                element: <AdminRoute element={<AdminDashboard section="clients" />} />
            },
            {
                path: '/admin/freelancers',
                element: <AdminRoute element={<AdminDashboard section="freelancers" />} />
            },
            {
                path: '/admin/jobs',
                element: <AdminRoute element={<AdminDashboard section="jobs" />} />
            }
        ]
    }
]);

export default router;