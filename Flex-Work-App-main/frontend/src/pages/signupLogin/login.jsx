import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import dummyUser from '../../dummyUser';
import { useDispatch } from 'react-redux';
import { updateUser } from '../../redux/userSlice';


const Login = () => {
    const navigate = useNavigate();
    const emailRef = useRef();
    const passwordRef = useRef();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const dispatch = useDispatch();


    const handleSubmit = (e) => {
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

            let response = null;
            //here use axios for the login api
            setTimeout(() => { //mimic loading
                // response = await axios.post('/api/login', { email, password });
                response = dummyUser.find(user => user.email === email && user.password === password);
                if (response) { //use response token instead
                    console.log(response);
                    dispatch(updateUser(response))
                    if (response.role === "admin") {
                        navigate('/admin/dashboard');
                    }
                    else if (response.role === "freelancer" || response.role === "client") {
                        navigate('/');
                    }
                    else {
                        setError("Invalid user Details by server.");
                    }
                }
                else {
                    setError("Invalid email or password.");
                }
                setLoading(false);
                passwordRef.current.value = "";
                emailRef.current.value = "";
            }, "3000");

        } catch (e) {
            setError(e.message)
        }
    }

    return (
        <div className="text-3xl min-h-screen flex items-center justify-center bg-gray-100">
            <form
                onSubmit={handleSubmit}
                action="#"
                method="post"
                className="flex flex-col items-center gap-10 py-24 px-52 bg-white rounded-3xl shadow-xl w-full max-w-screen-lg"
            >
                <h2 className="text-5xl font-bold text-gray-700 mb-4">Login to FlexWork</h2>

                <input
                    type="text"
                    placeholder="Username or Email"
                    ref={emailRef}
                    className="border border-black p-3 rounded-xl w-full focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent hover:ring-2 hover:ring-black hover:border-transparent"
                />

                <input
                    type="password"
                    placeholder="Enter Password"
                    ref={passwordRef}
                    className="border border-black p-3 rounded-xl w-full focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent hover:ring-2 hover:ring-black hover:border-transparent"
                />

                <p className='text-error'>{error ? error : ''}</p>
                <button
                    disabled={loading}
                    type="submit"
                    className=" bg-primary text-white p-5 rounded-xl w-full mt-4 hover:bg-primaryHover focus:outline-none disabled:bg-gray-400"
                >
                    Login
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
                            navigate('/signup')
                        }}
                        className="text-primary font-medium hover:underline focus:outline-none disabled:bg-gray-400"
                    >
                        Sign up
                    </button>
                </div>
            </form>
        </div>
    );
}

export default Login;
