import React, { useState,useRef,useEffect } from 'react'
import { RxCrossCircled } from "react-icons/rx";
import { HiCheckCircle } from "react-icons/hi";
import Rating from 'react-rating'
import { IoLocationOutline } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';


function PostedJob({post}) 
{
    const [isExpanded,setIsExpanded] = useState(false);
    const containerRef = useRef(null);
    const navigate = useNavigate();

    const toggleExpanded = () => {
      setIsExpanded((prev) => !prev);
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


      
    const isLong = post.description.split(' ').length > 40;

  return (
    <div className='bg-[#f1f1f1] hover:bg-[#e0e0e0] p-6 text-4xl my-8'>
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
    </div>
  )
}

export default PostedJob;