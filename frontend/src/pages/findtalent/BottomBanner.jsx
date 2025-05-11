import React from 'react'
import { useNavigate } from 'react-router-dom'

function BottomBanner() {
    const navigate = useNavigate();
    function handlePostJobClick(e)
    {
        e.preventDefault()
        navigate('/post-job');
    }
    let benefits = [
        {
            heading:'Discover quality talent fast',
            url:'https://cdn.prod.website-files.com/5f030e7bdf54ce3c5daf3964/662e40bb0b042c52b35c88aa_rising-talent.png',
            list:[
                'Post a job and receive proposals from talent',
                'See verified work history and reviews',
                'Send 30 invitations to talent per job post',
                'Use advanced search filters'
            ]
        },
        {
            heading:'Safe, easy payments',
            url:'https://cdn.prod.website-files.com/5f030e7bdf54ce3c5daf3964/662e40ba0acef96920fa5cf7_payment-funded%20(1).png',
            list:[
                'Get an extra level of security with Upwork Payment Protection',
                'Pay as you go billing for milestone and hourly contracts',
                '3-5% marketplace fee depending on billing method'
            ]
        },
        {
            heading:'Collaboration tools for project tracking',
            url:'https://cdn.prod.website-files.com/5f030e7bdf54ce3c5daf3964/662e40bb59eba719288ba92c_tool-draw.png',
            list:[
                'Chat, video call, and share files with talent',
                'Get advanced reporting and tracking',
                'Set coworker teams and member permission settings',
                'Customize your invoice with activity codes'
            ]
        },
        {
            heading:'Account support and guidance',
            url:'https://cdn.prod.website-files.com/5f030e7bdf54ce3c5daf3964/662e40bb94a3000fb164ad12_virtual-admin.png',
            list:[
                'Account support and guidance',
            ]
        }
    ]
  return (
    <div className='m-20 '>
        <div className='flex items-center gap-32'>
            <div className='w-6/12'>
                <img src="https://cdn.prod.website-files.com/5f030e7bdf54ce3c5daf3964/662e569064c79b57c9c7ec20_Data%20block%20(1).png" alt="poster image" />
            </div>
            <div className='w-7/12'>
                <h3 className='text-8xl font-semibold my-10'>Post today, hire tomorrow</h3>
                <p className='text-5xl my-6 text-[181818]'>We've got you covered from idea to delivery. Post your job and you'll start getting proposals. Once you've found your expert, you can talk timings, availability, and prices before going ahead.</p>
                <div className='flex items-center gap-5 text-5xl my-12'>
                        <div>
                            <img src="https://cdn.prod.website-files.com/5f030e7bdf54ce3c5daf3964/662e40ba0acef96920fa5cf7_payment-funded%20(1).png" alt="security icon" />
                        </div>
                        <div>
                            <h4 className='font-semibold mb-5'>Flexwork Payment Protection</h4>
                            <p className='text-3xl text-[#676767]'>Gives you security and peace of mind</p>
                        </div>
                </div>
                <button onClick={handlePostJobClick} className='text-5xl bg-primary hover:bg-primaryHover px-12 py-8 my-6 text-white rounded-2xl'>Post a job</button>
            </div>
        </div>
        <div className='text-5xl my-20'>
            <h2 className='text-8xl font-semibold my-20'>What you’ll get</h2>
            <div className='grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 items-start gap-y-16  mb-20 justify-evenly'>
                {
                    benefits.map((benefit)=>{
                        return (<div className='flex items-center gap-5'>
                            <img src={benefit.url} alt={benefit.heading} />
                            <ul className='list-disc'>
                                <h4 className='font-semibold mb-4'>{benefit.heading}</h4>
                                {
                                    benefit.list.map((item)=>{
                                        return <li className='text-4xl mx-8'>{item}</li>
                                    })
                                }
                            </ul>
                        </div>)
                    })
                }
            </div>
        </div>
    </div>
  )
}

export default BottomBanner