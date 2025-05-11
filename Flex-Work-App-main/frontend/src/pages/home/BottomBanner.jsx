import React from 'react'
import { Link } from 'react-router-dom';
import { FaArrowRight } from "react-icons/fa";

function BottomBanner() {
    return (
        <div className='w-full px-20 pt-10 pb-0 min-h-screen'>
          <div 
            className='bg-[url(https://res.cloudinary.com/upwork-cloud-acquisition-prod/image/upload/c_scale/brontes/delivery-models/find-talent-2x.jpg)] 
            w-full  min-h-screen bg-cover bg-center rounded-3xl'>
                <div className='w-1/3 pl-10 pt-10'>
                    <p className='text-white text-5xl font-semibold'>For clients</p>
                </div>
                <div className='w-1/3 pl-20 pt-20'> 
                    <p className='text-white text-9xl font-semibold'>
                        Find talent your way
                    </p>
                </div>
                <div className='w-1/2 pl-20 pt-20'>
                    <p className='text-white text-5xl font-semibold'>Work with the largest network of independent professionals and get things done—from quick turnarounds to big transformations.</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-20 mx-20 mt-20 justify-evenly">
                    <Link to=''>
                        <div className='bg-primary text-white hover:bg-white hover:text-primary p-5 rounded-2xl border-2 border-transparent hover:border-primaryHover h-64 transition-all duration-300'>
                        <h3 className='text-5xl font-semibold p-5'>Post a job and hire a pro</h3>
                        <div className='text-4xl p-5 flex justify-between items-center'>
                            <div className='flex justify-start items-center'>
                            <p>Talent Marketplace<sup className='text-xl'>TM</sup></p>
                            </div>
                            <FaArrowRight className='text-white'/>
                        </div>
                        </div>
                    </Link>

                    <Link to=''>
                        <div className='bg-primary text-white hover:bg-white hover:text-primary p-5 rounded-2xl border-2 border-transparent hover:border-primaryHover h-64 transition-all duration-300'>
                        <h3 className='text-5xl font-semibold p-5'>Browse and buy projects</h3>
                        <div className='text-4xl p-5 flex justify-between items-center'>
                            <div className='flex justify-start items-center'>
                            <p>Project Catalog<sup className='text-xl'>TM</sup></p>
                            </div>
                            <FaArrowRight className='text-white'/>
                        </div>
                        </div>
                    </Link>

                    <Link to=''>
                        <div className='bg-primary text-white hover:bg-white hover:text-primary p-5 rounded-2xl border-2 border-transparent hover:border-primaryHover h-64 transition-all duration-300'>
                        <h3 className='text-5xl font-semibold p-5'>Get advice from industry expert</h3>
                        <div className='text-4xl p-5 flex justify-between items-center'>
                            <div className='flex justify-start items-center'>
                            <p>Consultations</p>
                            </div>
                            <FaArrowRight className='text-white'/>
                        </div>
                        </div>
                    </Link>
                </div>
            </div>
    
            <div className="flex items-center py-10 w-full gap-80 relative">
                <div className="max-w-6xl">
                    <h2 className="text-8xl font-bold mb-10">Why businesses
                    turn to Flex Work</h2>
                    <div className="space-y-10">
                    
                        <div className="flex items-start gap-5">
                            <div className="size-20 flex items-center justify-center">
                            <div className="w-16 h-16">
                                <svg className="w-full h-full object-contain" viewBox="0 0 24 24" fill="none" role="img" xmlns="http://www.w3.org/2000/svg">
                                <path stroke="var(--icon-color, #001e00)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.5" d="M12 21a9 9 0 100-18 9 9 0 000 18z" />
                                <path stroke="var(--icon-color, #001e00)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.5" d="M11.7 7l1.2 3.2 3.5.2-2.7 2.2.9 3.4-2.9-1.9L8.8 16l.9-3.4L7 10.4l3.4-.2L11.7 7z" clipRule="evenodd" />
                                </svg>
                            </div>
                            </div>
                            <div>
                            <p className="font-semibold text-5xl mb-1">Proof of quality</p>
                            <p className="text-4xl">Check any pro’s work samples, client reviews, and identity verification.</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-5">
                            <div className="size-20 flex items-center justify-center">
                            <div className="w-16 h-16">
                                <svg className="w-full h-full object-contain" viewBox="0 0 24 24" fill="none" role="img" xmlns="http://www.w3.org/2000/svg">
                                <path stroke="var(--icon-color, #001e00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9.72 13.91A2.08 2.08 0 0012 15.7a2.08 2.08 0 002.28-1.79 1.68 1.68 0 00-1.13-1.56c-.62-.23-1.93-.55-2.54-.83a1.56 1.56 0 01-.89-1.43A2.08 2.08 0 0112 8.3a2.08 2.08 0 012.28 1.79M12 8.3V7m0 10v-1.3" />
                                <path stroke="var(--icon-color, #001e00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 21a9 9 0 100-18 9 9 0 000 18z" />
                                </svg>
                            </div>
                            </div>
                            <div>
                            <p className="font-semibold text-5xl mb-1">No cost until you hire</p>
                            <p className="text-4xl">Interview potential fits for your job, negotiate rates, and only pay for work you approve.</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-5">
                            <div className="size-20 flex items-center justify-center">
                            <div className="w-16 h-16">
                                <svg className="w-full h-full object-contain" viewBox="0 0 24 24" fill="none" role="img" xmlns="http://www.w3.org/2000/svg">
                                <path stroke="var(--icon-color, #001e00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 21a9 9 0 100-18 9 9 0 000 18z" />
                                <path stroke="var(--icon-color, #001e00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15.5 9.51l-4.98 4.98-2.02-2.01" />
                                </svg>
                            </div>
                            </div>
                            <div>
                            <p className="font-semibold text-5xl mb-1">Safe and secure</p>
                            <p className="text-4xl">Focus on your work knowing we help protect your data and privacy. We’re here with 24/7 support if you need it.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='bg-primary h-[800px] w-[900px]'>
                    <div className='text-white'>
                        <h3 className="text-5xl font-semibold mx-40 mt-40"><span>We’re <br/>the world’s work<br/>marketplace</span></h3>

                        <div className="mx-40 flex flex-col gap-10">
         
                            <div className="flex flex-col items-start m-10">
                                <div className="flex items-center gap-4">
                                <svg className="size-10 text-white fill-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" role="img">
                                    <path fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13.142 3.813l1.782 4.802 4.927.275c.243.013.477.104.672.26.194.156.338.37.415.615.077.245.082.508.015.756a1.288 1.288 0 01-.391.633L16.726 14.4l1.282 4.993c.06.252.047.517-.038.76a1.285 1.285 0 01-.437.606c-.2.15-.439.234-.684.24a1.174 1.174 0 01-.693-.21L12 17.976 7.854 20.77a1.175 1.175 0 01-.69.214 1.178 1.178 0 01-.684-.233 1.283 1.283 0 01-.441-.599 1.36 1.36 0 01-.047-.757l1.272-4.972-3.826-3.268a1.288 1.288 0 01-.391-.633 1.349 1.349 0 01.015-.756 1.28 1.28 0 01.415-.615c.195-.156.429-.247.672-.26l4.927-.275 1.782-4.802c.092-.24.25-.446.454-.59a1.177 1.177 0 011.376-.001c.204.145.361.35.454.59z" />
                                </svg>
                                <h3 className="text-4xl font-semibold text-white">4.9/5</h3>
                                </div>
                                <p className="mx-10 text-white text-4xl">
                                    Clients rate professionals on Upwork
                                </p>
                            </div>

                            <div className="flex flex-col items-start mx-10">
                            <div className="flex items-center gap-4">
                                <img
                                    src="https://res.cloudinary.com/upwork-cloud-acquisition-prod/image/upload/c_fit/brontes/why-upwork/group"
                                    width="30"
                                    height="31"
                                    alt="G2 icon"
                                    className="object-contain"
                                />
                                <h3 className="text-4xl font-semibold text-white">Award winner</h3>
                                </div>
                                <p className="mx-10 text-white text-4xl">
                                    G2’s 2021 Best Software Awards
                                </p>
                            </div>

                        </div>


                    </div>
                        <picture className='absolute left-[60%] top-[10%] transform -translate-x-1/2'><source srcSet="data:image/gif;base64,R0lGODlhAQABAAAAACwAAAAAAQABAAA=" media="(max-width: 0px)"/>  <img data-v-68b03fc4="" src="https://res.cloudinary.com/upwork-cloud-acquisition-prod/image/upload/c_scale,w_433,h_694,q_auto,dpr_2.0,f_auto/brontes/why-upwork/person-with-headset.png" width="433" height="694" alt="Stretching Person" /></picture>
                </div>
            </div>

            <div className="flex rounded-3xl items-center py-10 w-full min-h-screen">
                <div className='w-[45%] min-h-screen'>
                    <img className='min-h-screen w-full' src="https://res.cloudinary.com/upwork-cloud-acquisition-prod/image/upload//q_auto,dpr_2.0,f_auto/brontes/for-talents/find-great-work@2x.jpg" />
                </div>
                <div className='bg-blue-800 w-[55%] min-h-screen'>
                    <div className='pl-10 pt-10'>
                        <p className='text-white text-5xl font-semibold'>For talent</p>
                    </div>
                    <div className='pl-20 pt-20'> 
                        <p className='text-white text-9xl font-semibold'>
                        Find great work
                        </p>
                    </div>
                    <div className='pl-20 pt-20'>
                        <p className='text-white text-5xl font-semibold'>Meet clients you’re excited to work with and take your career or business to new heights.</p>
                    </div>
                    <hr className='text-white mt-48'/>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-20 mx-20 mt-20 justify-evenly text-white">
                        <div className='text-4xl'>
                            <p>Find opportunities for every stage of your freelance career</p>
                        </div>
                        <div className='text-4xl'>
                            <p>Control when, where, and how you work</p>
                        </div>
                        <div className='text-4xl'>
                            <p>Explore different ways to earn</p>
                        </div>
                                
                      
                    </div>

                    <button className="m-20 bg-white text-blue-600 hover:text-blue-800 px-8 py-4 rounded-2xl font-semibold text-4xl">
                        <Link to="">Find opportunities</Link>
                    </button>
                </div>
            </div>



    
        </div>
      );
}

export default BottomBanner