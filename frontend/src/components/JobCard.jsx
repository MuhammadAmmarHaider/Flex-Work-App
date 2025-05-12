import React, { useState,useRef,useEffect } from 'react'
import { RxCrossCircled } from "react-icons/rx";
import { HiCheckCircle } from "react-icons/hi";
import Rating from 'react-rating'
import { IoLocationOutline } from "react-icons/io5";
import { GoChevronLeft, GoChevronRight } from "react-icons/go";
import { useNavigate } from 'react-router-dom';
import { IoMdHeartEmpty } from "react-icons/io";
import axios from 'axios';

function JobCard({post}) 
{
    const [isExpanded,setIsExpanded] = useState(false);
    const containerRef = useRef(null);
    const [canScrollLeft, setCanScrollLeft] = useState(false);
    const [canScrollRight, setCanScrollRight] = useState(false);
    
    const navigate = useNavigate();

    const toggleExpanded = () => {
      setIsExpanded((prev) => !prev);
    };

    const scroll = (direction) => {
        const container = containerRef.current;
        if (!container) return;
        const scrollAmount = 200;
        container.scrollBy({ left: direction === 'right' ? scrollAmount : -scrollAmount, behavior: 'smooth' });
    };

    useEffect(() => {
        const checkForScroll = () => {
          const container = containerRef.current;
          if (container) {
            setCanScrollLeft(container.scrollLeft > 0);
            setCanScrollRight(
              container.scrollLeft + container.offsetWidth < container.scrollWidth
            );
          }
        };
        checkForScroll();
        containerRef.current?.addEventListener('scroll', checkForScroll);
        return () =>
          containerRef.current?.removeEventListener('scroll', checkForScroll);
      }, []);

    const handleClickOnPost =(e)=>{
        e.preventDefault();
        navigate(`/apply-job/${post._id}`);
    }

    const handleApplyJob=(e)=>{
        e.preventDefault();
        navigate(`/apply-job/${post._id}`);
    }
const handleSaveJob = async (e) => {
  e.preventDefault();
  const token = localStorage.getItem('token');
  const userId = localStorage.getItem('userId');  // Retrieve userId from localStorage

  const jobId = post._id;  // Ensure jobId is passed correctly

  try {
    const response = await axios.post(
      'http://localhost:5000/users/save-job',
      { jobId, userId },  // Include userId in the request body
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    if (response.status === 200) {
      console.log('Job saved successfully:', response.data);
      alert('Job saved successfully!');
      navigate('/');
    }
  } catch (error) {
    console.error('Error saving job:', error);

    if (error.response) {
      alert(`Failed to save job: ${error.response.data.message || error.response.data.error}`);
    } else {
      alert('Failed to save job. Please try again.');
    }
  }
};


      
    const isLong = post.description.split(' ').length > 40;

    console.log(post);
  return (
    <div className='bg-[#f1f1f1] hover:bg-[#e0e0e0] p-6 text-4xl my-8' onClick={handleClickOnPost}>
        <p className='text-2xl'>Posted {post.postedTime}</p>
        <h2 className='font-semibold text-5xl'>{post.title}</h2>
        <div className='text-2xl my-10'>
            <p>Hourly: {post.budget.paymentType} - {post.budget.experienceLevel} - Time: {post.estimatedDuration}, {post.workload}</p>
        </div>
        <div>
      <p className={isExpanded ? '' : 'line-clamp-3'}>
        {post.description}
      </p>
        {isLong && (
            <button
            onClick={toggleExpanded}
            className="text-primary underline mt-2"
            >
            {isExpanded ? 'less' : 'more'}
            </button>
        )}
        </div>
        <div className="my-12 relative">
        {canScrollLeft && (
            <button
            onClick={() => scroll('left')}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full shadow p-2"
            >
            <GoChevronLeft/>
            </button>
            )}

        <ul
            ref={containerRef}
            className="flex gap-4 items-center overflow-x-auto scroll-smooth no-scrollbar"
        >
            {post.skills.map((skill) => (
            <li key={skill} className="bg-[#d9d9d9] px-6 py-3 rounded-full whitespace-nowrap shrink-0">
                {skill}
            </li>
            ))}
        </ul>

        {canScrollRight && (
            <button
            onClick={() => scroll('right')}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full shadow p-2"
            >
            <GoChevronRight />
            </button>
        )}
        </div>
        <div className='flex gap-20 items-center my-12 text-3xl'>
            <p>{post.client.paymentVerified?<span><HiCheckCircle className='text-[#676767] inline-block'/> Payment verified</span>:<span><RxCrossCircled className='text-[#676767] inline-block'/> Payment unverified</span>} </p>
            <Rating
                initialRating={post.client.clientRating}
                readonly
                emptySymbol={<span className="text-gray-400 text-5xl">☆</span>}
                fullSymbol={<span className="text-[#df7606] text-5xl">★</span>}
                />

            <p>${post.client.clientSpent} Spent</p>
            <div className='flex items-center'><IoLocationOutline className='inline-block'/> {post.client.clientLocation}</div>

        </div>
        <p className='text-3xl'>Proposals: {post.proposalsRange}</p>
        <div className='flex items-center gap-20 my-8'>
            <button onClick={handleApplyJob} className='bg-primary text-white hover:bg-primaryHover px-10 py-5 rounded-2xl text-center'>Apply now</button>
            <button onClick={handleSaveJob} className='bg-white hover:bg-[#f1f1f1] flex items-center px-10 py-5 rounded-2xl text-primary border-primary border-2 border-solid'><IoMdHeartEmpty className=' inline-block mr-2'/><span> Save job</span></button>
        </div>
    </div>
  )
}

export default JobCard