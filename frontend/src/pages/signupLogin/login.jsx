import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { updateUser } from '../../redux/userSlice';
import axios from 'axios';

const Login = () => {
    const navigate = useNavigate();
    const emailRef = useRef();
    const passwordRef = useRef();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const dispatch = useDispatch();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;

        if (!email || !password) {
            setError("Both fields are required.");
            return;
        }

        try {
            setLoading(true);
            setError(null);
            const response = await axios.post('http://localhost:5000/login', {
                email,
                password
            });

            const { token, user } = response.data;
            localStorage.setItem("token", token);
            localStorage.setItem('userId', user._id);
            console.log("in login page: " + user._id + "-" + user.id)
            dispatch(updateUser(user));

            if (user.role === "admin") {
                navigate('/admin/dashboard');
            } else if (user.role === "freelancer" || user.role === "client") {
                navigate('/');
            } else {
                setError("Unknown user role.");
            }

            emailRef.current.value = "";
            passwordRef.current.value = "";

        } catch (err) {
            if (err.response && err.response.data && err.response.data.message) {
                setError(err.response.data.message);
            } else {
                setError("Something went wrong.");
            }
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="text-3xl min-h-screen flex items-center justify-center bg-gray-100">
            <form
                onSubmit={handleSubmit}
                className="flex flex-col items-center gap-10 py-24 px-52 bg-white rounded-3xl shadow-xl w-full max-w-screen-lg"
            >
                <h2 className="text-5xl font-bold text-gray-700 mb-4">Login to FlexWork</h2>

                <input
                    type="text"
                    placeholder="Username or Email"
                    ref={emailRef}
                    className="border border-black p-3 rounded-xl w-full"
                />

                <input
                    type="password"
                    placeholder="Enter Password"
                    ref={passwordRef}
                    className="border border-black p-3 rounded-xl w-full"
                />

                {error && <p className='text-red-500'>{error}</p>}

                <button
                    disabled={loading}
                    type="submit"
                    className=" bg-primary text-white p-5 rounded-xl w-full mt-4 hover:bg-primaryHover focus:outline-none disabled:bg-gray-400"
                >
                    {loading ? "Logging in..." : "Login"}
                </button>

                <p className="text-md text-gray-600">or</p>

                <button
                    disabled={loading}
                    className="w-full mt-2 p-5 bg-blue-500 text-white rounded-xl hover:bg-blue-600 focus:outline-none disabled:bg-gray-400"
                >
                    Continue with Google
                </button>

                <button
                    disabled={loading}
                    className="font-semibold w-full mt-2 p-5 border border-black rounded-xl hover:ring-2 hover:ring-black hover:border-transparent disabled:bg-gray-400"
                >
                    Continue with Apple
                </button>

                <div className="text-center mt-4">
                    <p className="text-md text-gray-600">Don't have a FlexWork account?</p>
                    <button
                        disabled={loading}
                        onClick={(e) => {
                            e.preventDefault();
                            navigate('/signup');
                        }}
                        className="text-primary font-medium hover:underline focus:outline-none disabled:bg-gray-400"
                    >
                        Sign up
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Login;
