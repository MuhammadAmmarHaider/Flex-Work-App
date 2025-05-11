import React from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <form
                action=""
                method="post"
                className="flex flex-col items-center gap-6 p-8 bg-white rounded-lg shadow-xl w-full max-w-sm"
            >
                <h2 className="text-2xl font-bold text-gray-700 mb-4">Login to FlexWork</h2>

                <input
                    type="text"
                    placeholder="Username or Email"
                    className="border border-black p-3 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent hover:ring-2 hover:ring-black hover:border-transparent"
                />

                <button
                    type="submit"
                    className="bg-primary text-white p-3 rounded-lg w-full mt-4 hover:bg-primaryHover focus:outline-none"
                >
                    Continue
                </button>

                <div className="my-4 text-center">
                    <p className="text-sm text-gray-600">or</p>
                    <button
                        className="w-full mt-2 p-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none"
                    >
                        Continue with Google
                    </button>
                    <button
                        className="w-full mt-2 p-3 border border-black rounded-lg hover:ring-2 hover:ring-black hover:border-transparent"
                    >
                        Continue with Apple
                    </button>
                </div>

                <div className="text-center mt-4">
                    <p className="text-sm text-gray-600">Don't have a FlexWork account?</p>
                    <button
                        onClick={(e) => {
                            e.preventDefault();
                            navigate('/signup')
                        }}
                        className="text-primary font-medium hover:underline focus:outline-none"
                    >
                        Sign up
                    </button>
                </div>
            </form>
        </div>
    );
}

export default Login;
