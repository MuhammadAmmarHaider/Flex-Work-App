import React from 'react'
import { Link, useNavigate } from 'react-router-dom'


function TopBanner() {

    const navigate = useNavigate();

    function handleGetStartedClick(e)
    {
        e.preventDefault();
        navigate("/post-job");
    }

  return (
    <div className='m-20'>
        <div className='flex items-center gap-20 text-5xl my-20'>
            <div className='w-1/2 flex flex-col gap-20 items-start' >
                <h2 className='text-9xl font-semibold'>Post a job today, hire tomorrow</h2>
                <p>Connect with talent that gets you, and hire them to take your business to the next level.</p>
                <button onClick={handleGetStartedClick} className='px-64 py-8 bg-primary hover:bg-primaryHover text-white rounded-2xl'>Get Started</button>
            </div>
            <div className='w-1/2'>
                <img src="https://cdn.prod.website-files.com/5f030e7bdf54ce3c5daf3964/6630d2993b3e2c9852dee33a_Image%20(2).webp" alt="gtm-img-contain" />
            </div>
        </div>
        <div className='text-5xl bg-[#f9f9f9] my-20 p-10'>
            <div className='flex gap-5 items-start'>
                <div className='w-3/5 my-16'>
                    <h3 className='text-8xl font-semibold'>The best colleagues you’ve never met</h3>
                    <p className='my-16'>Logo designers. App developers. Customer support gurus. Marketing agencies. Make the right connection and it’ll last a lifetime.</p>
                </div>
                <div className='w-2/5 flex items-center gap-10'>
                    <div className='flex flex-col items-start gap-5'>
                        <div className='flex items-center gap-5'>
                            <h3 className='text-8xl font-semibold'>4.9</h3>
                            <div className='flex items-center gap-2'>
                                <img className='size-10' src="https://cdn.prod.website-files.com/5f030e7bdf54ce3c5daf3964/662e40bfff8886191617dac5_rating-activated.svg" alt="star icon" />
                                <img className='size-10' src="https://cdn.prod.website-files.com/5f030e7bdf54ce3c5daf3964/662e40bfff8886191617dac5_rating-activated.svg" alt="star icon" />
                                <img className='size-10' src="https://cdn.prod.website-files.com/5f030e7bdf54ce3c5daf3964/662e40bfff8886191617dac5_rating-activated.svg" alt="star icon" />
                                <img className='size-10' src="https://cdn.prod.website-files.com/5f030e7bdf54ce3c5daf3964/662e40bfff8886191617dac5_rating-activated.svg" alt="star icon" />
                                <img className='size-10' src="https://cdn.prod.website-files.com/5f030e7bdf54ce3c5daf3964/662e40bfff8886191617dac5_rating-activated.svg" alt="star icon" />
                            </div>
                        </div>
                        <p className='text-4xl'>Average rating of talent from 2M+ reviews</p>
                    </div>
                    <div className='my-16'>
                        <h3 className='text-8xl font-semibold mb-5'>8K+</h3>
                        <p className='text-4xl'>Skills represented by talent on Upwork.</p>
                    </div>
                </div>
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-20  mb-10 justify-evenly'>
                <Link>
                    <div className='flex items-center gap-5 text-4xl bg-white rounded-3xl p-12 shadow-xl hover:shadow-2xl'>
                        <div>
                            <img src="https://cdn.prod.website-files.com/5f030e7bdf54ce3c5daf3964/662e40bbc91cc7a39f584640_cat-web-programming.png" alt="computer icon" />
                        </div>
                        <div >
                            <h4 className='font-semibold mb-8'>Development and IT</h4>
                            <p className='text-3xl'>20K+ jobs posted weekly</p>
                        </div>
                    </div>
                </Link>

                <Link>
                    <div className='flex items-center gap-5 text-4xl bg-white rounded-3xl p-12 shadow-xl hover:shadow-2xl'>
                        <div>
                            <img src="https://cdn.prod.website-files.com/5f030e7bdf54ce3c5daf3964/662e40bab46f4de75dbe4e99_marketing.png" alt="marketing icon" />
                        </div>
                        <div>
                            <h4 className='font-semibold mb-8'>Sales & Marketing</h4>
                            <p className='text-3xl'>10K+ jobs posted weekly</p>
                        </div>
                    </div>
                </Link>

                <Link>
                    <div className='flex items-center gap-5 text-4xl bg-white rounded-3xl p-12 shadow-xl hover:shadow-2xl'>
                        <div>
                            <img src="https://cdn.prod.website-files.com/5f030e7bdf54ce3c5daf3964/662e40bb0b042c52b35c87c7_cat-design-and-creative.png" alt="creativity icon" />
                        </div>
                        <div>
                            <h4 className='font-semibold mb-8'>Design & Creative</h4>
                            <p className='text-3xl'>15K+ jobs posted weekly</p>
                        </div>
                    </div>
                </Link>

                <Link>
                    <div className='flex items-center gap-5 text-4xl bg-white rounded-3xl p-12 shadow-xl hover:shadow-2xl'>
                        <div>
                            <img src="https://cdn.prod.website-files.com/5f030e7bdf54ce3c5daf3964/662e40bb50c00927c4ccb502_cat-writing.png" alt="writing icon" />
                        </div>
                        <div>
                            <h4 className='font-semibold mb-8'>Writing & Translation</h4>
                            <p className='text-3xl'>20K+ jobs posted weekly</p>
                        </div>
                    </div>
                </Link>

                <Link>
                    <div className='flex items-center gap-5 text-4xl bg-white rounded-3xl p-12 shadow-xl hover:shadow-2xl'>
                        <div>
                            <img src="https://cdn.prod.website-files.com/5f030e7bdf54ce3c5daf3964/662e40ba9817e0bbcfdc5768_customer-support-simple.png" alt="customer support icon" />
                        </div>
                        <div>
                            <h4 className='font-semibold mb-8'>Admin & Customer Support</h4>
                            <p className='text-3xl'>10K+ jobs posted weekly</p>
                        </div>
                    </div>
                </Link>

                <Link>
                    <div className='flex items-center gap-5 text-4xl bg-white rounded-3xl p-12 shadow-xl hover:shadow-2xl'>
                        <div>
                            <img src="https://cdn.prod.website-files.com/5f030e7bdf54ce3c5daf3964/662e40bb43a4ccf1e020b8ec_cat-financial-analysis-valuation.png" alt="finance icon" />
                        </div>
                        <div>
                            <h4 className='font-semibold mb-8'>Finance & Accounting</h4>
                            <p className='text-3xl'>15K+ jobs posted weekly</p>
                        </div>
                    </div>
                </Link>
     
            </div>
        </div>
    </div>
  )
}

export default TopBanner