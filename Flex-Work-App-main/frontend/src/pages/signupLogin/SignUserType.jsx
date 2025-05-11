import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

function SignupUserType() {

    const [buttonText, setButtonText] = useState('Create Account');
    const navigate = useNavigate();
    const hadleUserSelection = (e) => {
        setButtonText(e.target.value);
    }

    const handleSignupClick = () => {
        navigate("/signup/" + (buttonText.includes('Client') ? "client" : "freelancer"));
    }

    return (
        <div className='text-3xl flex flex-col gap-10 items-center justify-center min-h-screen'>
            <h1 className='text-6xl'>Join as a client or freelancer</h1>
            <div className='text-3xl flex gap-10'>
                <label htmlFor='client' className='text-3xl border-black border-2 px-10 py-20 text-right rounded-xl font-semibold hover:cursor-pointer
                transition-transform duration-200 ease-in-out active:scale-95'>
                    <input type="radio" name="user-type" id="client" value="Join as a Client" className='scale-[250%] accent-primary' onClick={hadleUserSelection} />
                    <div className='text-5xl max-w-md text-left'>
                        <p>I am a client, hiring for a project.</p>
                    </div>
                </label>
                <label htmlFor='freelancer' className='text-3xl border-black border-2 px-10 py-20 text-right rounded-xl font-semibold hover:cursor-pointer
                transition-transform duration-200 ease-in-out active:scale-95'>
                    <input type="radio" name="user-type" id="freelancer" value="Apply as a freelancer" className='scale-[250%] accent-primary' onClick={hadleUserSelection} />
                    <div className='text-5xl max-w-md text-left'>
                        <p>I am a freelancer, looking for a work.</p>
                    </div>
                </label>
            </div>
            <button disabled={buttonText === 'Create Account'} className='bg-primary py-5 px-10 rounded-xl disabled:bg-gray-400 disabled:cursor-not-allowed text-white hover:bg-primaryHover' onClick={handleSignupClick}>{buttonText}</button>
            <p>Already have an account? <Link to="/login" className='text-primary text-decoration-line: underline'>Login</Link></p>
        </div >
    )
}

export default SignupUserType