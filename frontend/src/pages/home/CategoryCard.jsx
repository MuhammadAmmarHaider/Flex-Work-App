import React from 'react'
import { FaStar } from "react-icons/fa";

function CategoryCard({category}) {
  return (
    <div className='bg-[#f0f2f4] hover:bg-[#e2e6e9] p-10'>
        <h3 className='text-5xl font-semibold p-5'>{category.name}</h3>
        <div className='text-4xl p-5 flex justify-between items-center'>
            <div className='flex justify-start items-center'>
                <FaStar className='text-primary' />
                <p>{category.rating}/5</p>
            </div>
            <p>{category.skills} skills</p>
        </div>
    </div>
  )
}

export default CategoryCard