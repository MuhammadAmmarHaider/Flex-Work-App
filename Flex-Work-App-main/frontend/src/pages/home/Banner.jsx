import React from 'react';
import landing from '../../assets/Landing.jpg'
import { Link } from 'react-router-dom';
function Banner() {
  return (
    <div className='w-full px-20 pt-10 pb-0 '>
      <div 
        className='bg-[url(https://res.cloudinary.com/upwork-cloud-acquisition-prod/image/upload/v1741896805/brontes/hero/ApartmentCoder.png)] 
        w-full h-[calc(100vh-200px)] bg-cover bg-center rounded-3xl min-h-screen'>
            <div className='w-1/2 pl-20 pt-20'> 
                <p className='text-white text-9xl font-semibold'>
                    Connecting clients in need to freelancers who deliver
                </p>
            </div>
      </div>

        <div className="flex items-center py-10 w-full gap-20">
            <div>
                <img className="rounded-3xl h-[800px] w-[900px] object-cover" src={landing} alt="landing platform" />
            </div>
            <div className="max-w-7xl">
                <h2 className="text-8xl font-bold mb-10">Flex your work, it's easy</h2>

                <div className="space-y-8">
               
                    <div className="flex items-start gap-5">
                        <div className="size-20">
                   
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" aria-hidden="true" viewBox="0 0 24 24" role="img">
                                <path vectorEffect="non-scaling-stroke" stroke="#001e00" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.981 13.7v3.287a2.997 2.997 0 01-2.997 2.997H5.998A2.997 2.997 0 013 16.986v-9.99A2.997 2.997 0 015.997 4h4.995m5.25 2.059l2.737 2.757"></path>
                                <path vectorEffect="non-scaling-stroke" stroke="#001e00" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11.99 15.358l-1.489.29a.999.999 0 01-.49 0 1.119 1.119 0 01-.42-.25 1 1 0 01-.249-.41.909.909 0 010-.489l.28-1.508c.085-.38.28-.728.56-1l7.362-7.362a1.85 1.85 0 01.649-.44c.247-.116.516-.18.79-.189.264.002.525.056.768.16.247.1.471.25.66.44a2 2 0 01.44.649 2.082 2.082 0 010 1.548 1.998 1.998 0 01-.44.65l-7.423 7.352c-.27.28-.618.474-.999.56z"></path>
                            </svg>
                        </div>
                        <div>
                            <p className="font-semibold text-5xl mb-1">No cost to join</p>
                            <p className="text-4xl">Register and browse talent profiles, explore projects, or even book a consultation.</p>
                        </div>
                    </div>

                    <div className="flex items-start gap-5">
                        <div className="size-20">

                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" aria-hidden="true" viewBox="0 0 24 24" role="img">
                                <path vectorEffect="non-scaling-stroke" stroke="#001e00" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="2" d="M15 19l.3-.3c2.8-2.8 2.8-7.2 0-10C12.5 6 8 6 5.3 8.8L5 9l10 10z"></path>
                                <path vectorEffect="non-scaling-stroke" stroke="#001e00" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="2" d="M17 11.5l3.3-3.3c.4-.4.4-1 0-1.4l-3.1-3.1c-.4-.4-1-.4-1.4 0L12.5 7M10 14l-7 7"></path>
                            </svg>
                        </div>
                        <div>
                            <p className="font-semibold text-5xl mb-1">Post a job and hire top talent</p>
                            <p className="text-4xl">Finding talent doesn’t have to be a chore. Post a job or we can search for you!</p>
                        </div>
                    </div>
                    <div className="flex items-start gap-5">
                        <div className="size-20">
                         
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" aria-hidden="true" viewBox="0 0 24 24" role="img">
                                <path vectorEffect="non-scaling-stroke" stroke="#001e00" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.015 16.114l-7.039 4.578a1.908 1.908 0 01-2.079 0l-7.039-4.578A1.908 1.908 0 013 14.512V4.907A1.907 1.907 0 014.907 3h14.059a1.908 1.908 0 011.907 1.907v9.605a1.908 1.908 0 01-.858 1.602z" clipRule="evenodd"></path>
                                <path vectorEffect="non-scaling-stroke" stroke="#001e00" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11.939 5.33l1.392 3.596 3.854.21-2.995 2.441.992 3.73-3.243-2.1-3.243 2.1 1.002-3.73-3.005-2.442 3.863-.21 1.383-3.595z" clipRule="evenodd"></path>
                            </svg>
                        </div>
                        <div>
                            <p className="font-semibold text-5xl mb-1">Work with the best—without breaking the bank</p>
                            <p className="text-4xl">Upwork makes it affordable to up your work and take advantage of low transaction rates.</p>
                        </div>
                    </div>
                </div>

           
                <button className="mt-10 bg-primary hover:bg-primaryHover text-white px-8 py-4 rounded-2xl font-semibold text-4xl">
                    <Link to="">Sign up for free</Link>
                </button>
            </div>
        </div>

    </div>
  );
}

export default Banner;
