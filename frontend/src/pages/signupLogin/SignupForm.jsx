import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import dummyUser from '../../dummyUser';
import { useDispatch } from 'react-redux';
import { updateUser, resetUser } from '../../redux/userSlice';
import axios from 'axios';

const SignupForm = () => {
    const { userType } = useParams();
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        country: 'Pakistan',
        subscribe: true,
        agree: false,
        role:userType,
    });

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const handleSubmit = async (e) => {
        
        e.preventDefault();
        setLoading(true);
        setError('');

        try {
        // Using axios instead of fetch
        const res = await axios.post('http://localhost:5000/signup', formData, {
            headers: {
            'Content-Type': 'application/json'
            }
        });
         console.log("Form submitted");
        // Check for successful signup
        if (res.status === 201) {
            alert('Signup successful');
            navigate('/login');
        }
        } catch (err) {
        if (err.response) {
            // Handle errors from server
            setError(err.response.data.message || 'Signup failed');
        } else {
            // Handle network error or server not responding
            setError('Network error or server not responding');
        }
        } finally {
        setLoading(false);
        }
    };

    return (
        <div className='flex flex-col items-center min-h-screen text-3xl gap-10 p-5'>
            <h1 className='text-6xl m-2'>Sign up to {userType === 'client' ? 'find work you love' : 'hire talent'}</h1>
            <div className='flex justify-center gap-10 text-3xl min-w-[50%]'>
                <button disabled={loading} className="w-full mt-2 py-4 px-20 border border-black rounded-full hover:bg-gray-300 disabled:bg-gray-300">
                    Continue with Apple
                </button>
                <button disabled={loading} className="text-left w-full mt-2 py-4 px-20 border border-black rounded-full bg-blue-500 hover:bg-blue-400 text-white disabled:bg-gray-300">
                    Continue with Google
                </button>
            </div>
            <p>or</p>
            <form onSubmit={handleSubmit} className="flex flex-col gap-5 text-3xl w-full max-w-[50%]">
                <div className="flex gap-3">
                    <input type="text" name="firstName" placeholder="First name" required value={formData.firstName} onChange={handleChange} className="flex-1 p-3 border border-gray-400 rounded-xl w-full" />
                    <input type="text" name="lastName" placeholder="Last name" required value={formData.lastName} onChange={handleChange} className="flex-1 p-3 border border-gray-400 rounded-xl w-full" />
                </div>
                <input type="email" name="email" placeholder="Email" required value={formData.email} onChange={handleChange} className="p-3 border border-gray-400 rounded-xl w-full" />
                <input type="password" name="password" placeholder="Password (8 or more characters)" required minLength={8} value={formData.password} onChange={handleChange} className="p-3 border border-gray-400 rounded-xl w-full" />
                <select name="country" value={formData.country} onChange={handleChange} required className="p-3 border border-gray-400 rounded-xl w-full">
                    <option value="Pakistan">Pakistan</option>
                    <option value="India">India</option>
                    <option value="USA">USA</option>
                    <option value="UK">UK</option>
                </select>
                <label className="flex items-center gap-2">
                    <input type="checkbox" name="subscribe" checked={formData.subscribe} onChange={handleChange} className="w-5 h-5 mr-5 scale-[200%]" />
                    Send me helpful emails to find rewarding work and job leads.
                </label>
                <label className="flex items-start gap-2">
                    <input type="checkbox" name="agree" checked={formData.agree} onChange={handleChange} className="w-5 h-5 mt-1 mr-5 scale-[280%]" />
                    <span>
                        Yes, I understand and agree to the{' '}
                        <a href="#" className="text-green-600 underline">Upwork Terms of Service</a>, including the{' '}
                        <a href="#" className="text-green-600 underline">User Agreement</a> and{' '}
                        <a href="#" className="text-green-600 underline">Privacy Policy</a>.
                    </span>
                </label>

                {error && <p className="text-red-500 text-xl">{error}</p>}

                <button type="submit" disabled={loading} className="bg-green-600 hover:bg-green-700 text-white py-3 rounded-full disabled:bg-gray-400">
                    {loading ? "Creating Account..." : "Create my account"}
                </button>

                <p className="text-center text-2xl">
                    Already have an account? <a href="/login" className="text-green-600 underline">Log In</a>
                </p>
            </form>
        </div>
    );
};

export default SignupForm;
