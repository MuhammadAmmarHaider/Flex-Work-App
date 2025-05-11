import React, { useState } from 'react'

function TermsCard({ amount, setAmount, duration, setDuration }) {

    function handleChange(e)
    {
        e.preventDefault();
        setAmount(parseFloat(e.target.value));
    }

  return (
    <div className='border-2 border-solid border-black my-8'>
        <div className='flex px-20 py-10'>
            <div className='w-2/3'>
                <h1 className='text-6xl font-semibold my-12'>Terms</h1>
                <p className='text-4xl my-12'>What is the full amount you'd like to bid for this job?</p>
                <div className='text-4xl my-2'>
                    <div className='flex justify-between items-center my-4'>
                        <label htmlFor="bidAmount">Bid</label>
                        <input onChange={handleChange} value={amount} type="number" id='bidAmount' className='border-solid border-black border-2 rounded-xl text-5xl py-2 px-6' min="0" required/>
                    </div>
                    <p className='text-3xl'>Total amount the client will see on your proposal</p>
                </div>
                <hr className='my-10'/>
                <div className='text-4xl my-2'>
                    <div className='flex justify-between items-center my-4'>
                        <label htmlFor="bidAmount">10% Freelancer Service Fee</label>
                        <input type="number" value={.1*amount} id='bidAmount' className='border-solid border-black border-2 rounded-xl text-5xl py-2 px-6' disabled />
                    </div>
                    <p className='text-3xl'>This fee is fixed for the life of the contract</p>
                </div>
                <hr className='my-10'/>
                <div className='text-4xl my-2'>
                    <div className='flex justify-between items-center my-4'>
                        <label htmlFor="bidAmount">You’ll Receive</label>
                        <input type="number" value={.9*amount} id='bidAmount' className='border-solid border-black border-2 rounded-xl text-5xl py-2 px-6' disabled/>
                    </div>
                    <p className='text-3xl'>The estimated amount you'll receive after service fees</p>
                </div>
            </div>
            <div className='w-1/3 flex flex-col gap-10 justify-center items-center'>
                <svg className='size-80' fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 145 130" aria-hidden="true" role="img"><path d="M71.242 127.587c-23.793 0-43.103-19.31-43.103-43.103V18.967l42.758-9.31 43.449 9.31v65.517c0 23.793-19.31 43.103-43.104 43.103z" fill="url(#paint0_linear_27142_40731-uid-34)"></path><path d="M87.793 12.76L72.966 9.656l-6.897 1.38c-6.552 4.138-14.138 5.517-21.724 4.827l-14.138 3.104v65.517c0 23.793 19.31 43.103 43.104 43.103 23.793 0 43.103-19.31 43.103-43.103V18.967l-13.104-2.759c-5.517 0-10.69-1.034-15.517-3.448zm25.173 11.379v61.035c0 10-3.793 19.31-11.035 26.551-7.241 7.242-16.552 11.035-26.552 11.035s-19.31-3.793-26.551-11.035c-7.242-7.241-11.035-16.551-11.035-26.551V24.139c3.449.69 6.897 1.38 10.345 1.38 6.552 0 13.104-1.38 18.966-4.483 2.758-1.38 5.517-3.104 7.93-5.173 2.414 2.07 5.173 3.793 7.932 5.173 5.862 2.758 12.413 4.482 18.965 4.482 4.138 0 7.586-.69 11.035-1.379z" fill="#CE7E3C"></path><path d="M77.45 103.794h-3.793v-7.587c-4.828-.69-8.62-1.724-11.035-3.103-4.138-2.759-6.551-7.931-6.207-14.828h10c.345 3.104.69 5.173 1.38 6.207 1.034 1.724 2.758 2.759 5.862 3.449V71.725l-3.104-1.035c-4.827-1.38-8.275-3.448-10-5.862-2.069-2.414-3.103-5.517-3.103-8.965 0-2.414.345-4.483 1.034-6.207.69-2.07 1.724-3.449 3.104-4.828 1.724-1.724 3.793-3.103 5.862-3.793 1.38-.345 3.448-.69 5.862-1.034v-5.173h3.793V40c4.138.345 7.241 1.38 9.655 3.104 4.138 2.759 6.552 6.897 6.552 13.103h-9.655c-.345-2.069-.69-3.793-1.035-4.827-1.034-1.724-2.758-2.759-5.172-3.104V62.76c5.862 2.07 10 3.793 12.069 5.517 3.448 2.759 5.172 6.207 5.172 11.035 0 6.207-2.413 11.034-6.896 13.793-2.759 1.724-6.207 2.759-10 3.103v7.587h-.345zm-3.793-55.518c-2.07 0-3.793.69-4.828 1.724-1.034 1.035-1.724 2.76-1.724 4.483 0 2.07.69 3.793 2.414 5.173 1.034.69 2.069 1.379 4.138 1.724V48.276zm3.793 39.31c2.069-.344 3.448-.689 4.138-1.379 1.724-1.034 2.414-3.103 2.414-5.862 0-2.069-.69-3.793-2.07-5.172-1.034-.69-2.413-1.38-4.482-2.414v14.828z" fill="#CE7E3C"></path><path d="M117.793 7.241l-2.414 3.104C101.241 17.24 83.655 13.448 73.655 0h-2.758l-.69 4.138c-11.38 11.38-30 13.103-43.448 3.448H24l2.759 5.862v69.655c0 25.863 21.034 46.897 46.896 46.897 25.862 0 46.897-21.034 46.897-46.897V7.242h-2.759zm-6.552 75.518c0 10-3.793 19.31-11.034 26.551-7.241 7.242-16.552 11.035-26.552 11.035s-19.31-3.793-26.552-11.035c-7.24-7.241-11.034-16.551-11.034-26.551V21.724c3.448.69 6.896 1.38 10.345 1.38 6.551 0 13.103-1.38 18.965-4.483 2.759-1.38 5.518-3.104 7.931-5.173 2.414 2.07 5.173 3.793 7.931 5.173 5.862 2.758 12.414 4.483 18.966 4.483 3.448 0 7.241-.345 10.345-1.38V82.76h.689z" fill="url(#paint1_linear_27142_40731-uid-34)"></path><path d="M70.897 0C59.862 14.828 39.172 18.276 24 7.241V82.76c0 25.862 21.035 46.896 46.897 46.896s46.896-21.034 46.896-46.896V7.24C102.966 18.276 81.931 15.172 70.897 0zm37.586 82.759c0 10-3.793 19.31-11.035 26.551-7.241 7.242-16.551 11.035-26.551 11.035s-19.31-3.793-26.552-11.035c-7.242-7.241-11.035-16.551-11.035-26.551V21.724c3.449.69 6.897 1.38 10.345 1.38 6.552 0 13.104-1.38 18.966-4.483 2.758-1.38 5.517-3.104 7.93-5.173 2.415 2.07 5.173 3.793 7.932 5.173 5.862 2.758 12.414 4.483 18.965 4.483 3.449 0 7.242-.345 10.345-1.38V82.76h.69z" fill="url(#paint2_linear_27142_40731-uid-34)"></path><path d="M75.036 101.033h-3.793v-7.242c-4.828-.69-8.621-1.724-11.035-3.103-4.138-2.759-6.551-7.931-6.207-14.828h10c.345 3.104.69 5.173 1.38 6.207 1.034 1.724 2.758 2.759 5.862 3.449V69.309l-3.104-1.035c-4.827-1.38-8.276-3.448-10-5.862-2.069-2.414-3.103-5.517-3.103-8.965 0-2.414.345-4.483 1.034-6.207.69-2.07 1.724-3.449 3.104-4.828 1.724-1.724 3.793-3.103 5.862-3.793 1.38-.345 3.448-.69 5.862-1.035v-5.172h3.793v5.172c4.138.345 7.241 1.38 9.655 3.104 4.138 2.759 6.552 6.896 6.552 13.103h-10c-.345-2.069-.69-3.793-1.035-4.827-1.034-1.724-2.758-2.759-5.172-3.104v14.483c5.862 2.07 10 3.793 12.069 5.517 3.448 2.759 5.172 6.207 5.172 11.035 0 6.207-2.413 11.034-6.896 13.793-2.759 1.724-6.207 2.759-10 3.103v7.242zM71.243 45.86c-2.07 0-3.793.69-4.828 1.724-1.034 1.035-1.724 2.76-1.724 4.483 0 2.07.69 3.793 2.414 5.173 1.034.69 2.069 1.379 4.138 1.724V45.86zm3.793 39.31c2.069-.344 3.448-.689 4.138-1.379 1.724-1.034 2.413-3.103 2.413-5.862 0-2.069-.69-3.793-2.068-5.172-1.035-.69-2.414-1.38-4.483-2.414v14.828z" fill="url(#paint3_linear_27142_40731-uid-34)"></path><path d="M72.276 101.033h-3.793v-7.242c-4.828-.69-8.62-1.724-11.035-3.103-4.138-2.759-6.551-7.931-6.206-14.828h10c.344 3.104.69 5.173 1.379 6.207 1.034 1.724 2.758 2.759 5.862 3.449V69.309l-3.104-1.035c-4.827-1.38-8.275-3.448-10-5.862-2.068-2.414-3.103-5.517-3.103-8.965 0-2.414.345-4.483 1.034-6.207.69-2.07 1.725-3.449 3.104-4.828 1.724-1.724 3.793-3.103 5.862-3.793 1.38-.345 3.448-.69 5.862-1.035v-5.172h3.793v5.172c4.138.345 7.242 1.38 9.655 3.104 4.138 2.759 6.552 6.896 6.552 13.103h-10c-.345-2.069-.69-3.793-1.034-4.827-1.035-1.724-2.759-2.759-5.173-3.104v14.483c5.862 2.07 10 3.793 12.07 5.517 3.447 2.759 5.172 6.207 5.172 11.035 0 6.207-2.414 11.034-6.897 13.793-2.759 1.724-6.207 2.759-10 3.103v7.242zM68.483 45.86c-2.069 0-3.793.69-4.828 1.724-1.034 1.035-1.724 2.76-1.724 4.483 0 2.07.69 3.793 2.414 5.173 1.034.69 2.069 1.379 4.138 1.724V45.86zm3.793 39.31c2.069-.344 3.448-.689 4.138-1.379 1.724-1.034 2.414-3.103 2.414-5.862 0-2.069-.69-3.793-2.07-5.172-1.034-.69-2.413-1.38-4.482-2.414v14.828z" fill="url(#paint4_linear_27142_40731-uid-34)"></path><defs><linearGradient id="paint0_linear_27142_40731-uid-34" x1="28.721" y1="18.284" x2="113.549" y2="103.111" gradientUnits="userSpaceOnUse"><stop offset=".273" stopColor="#EB9546"></stop><stop offset=".294" stopColor="#ED9B4D"></stop><stop offset=".383" stopColor="#F4B164"></stop><stop offset=".479" stopColor="#F8C174"></stop><stop offset=".586" stopColor="#FBCA7E"></stop><stop offset=".724" stopColor="#FCCD81"></stop><stop offset="1" stopColor="#EB9546"></stop></linearGradient><linearGradient id="paint1_linear_27142_40731-uid-34" x1="72.271" y1="129.603" x2="72.271" y2=".099" gradientUnits="userSpaceOnUse"><stop stopColor="#FCCD81"></stop><stop offset=".197" stopColor="#F6BA6D"></stop><stop offset=".475" stopColor="#F0A657"></stop><stop offset=".744" stopColor="#EC994A"></stop><stop offset=".993" stopColor="#EB9546"></stop></linearGradient><linearGradient id="paint2_linear_27142_40731-uid-34" x1="23.808" y1="7.613" x2="118.058" y2="101.862" gradientUnits="userSpaceOnUse"><stop offset=".058" stopColor="#EB9546"></stop><stop offset=".687" stopColor="#FCCD81"></stop></linearGradient><linearGradient id="paint3_linear_27142_40731-uid-34" x1="72.888" y1="101.143" x2="72.888" y2="32.392" gradientUnits="userSpaceOnUse"><stop stopColor="#FBC97D"></stop><stop offset=".251" stopColor="#EB9546"></stop><stop offset=".565" stopColor="#FCCD81"></stop><stop offset="1" stopColor="#EB9546"></stop></linearGradient><linearGradient id="paint4_linear_27142_40731-uid-34" x1="51.529" y1="47.271" x2="88.816" y2="84.559" gradientUnits="userSpaceOnUse"><stop offset=".294" stopColor="#FCCD81"></stop><stop offset=".347" stopColor="#F7BE71"></stop><stop offset=".444" stopColor="#F1A759"></stop><stop offset=".535" stopColor="#EC9A4B"></stop><stop offset=".612" stopColor="#EB9546"></stop><stop offset=".822" stopColor="#FBC87C"></stop></linearGradient></defs></svg>
                <p className='text-3xl'>Includes Flexwork Fixed-Price Protection</p>
            </div>
        </div>
        <div className='border-2 border-solid border-black m-20 text-4xl py-12'>
            <label className='mx-10' htmlFor="duration">How long will this project take?</label>
            <select value={duration} onChange={(e) => setDuration(e.target.value)} required className='border-2 border-solid border-black block py-2 px-6 rounded-xl mx-10 mt-10'>
            <option value="" disabled hidden>Select a duration</option>
            <option value="More than 6 months">More than 6 months</option>
            <option value="3 to 6 months">3 to 6 months</option>
            <option value="1 to 3 months">1 to 3 months</option>
            <option value="Less than 1 month">Less than 1 month</option>
            </select>
        </div>
    </div>
  )
}

export default TermsCard