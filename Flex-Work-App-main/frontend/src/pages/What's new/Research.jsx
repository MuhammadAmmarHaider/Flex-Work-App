import React from 'react'
import Res from '../../assets/Res.jpg'
export default function Research() {
  return (
    <>
    <div className="flex justify-center items-center p-4">
  <img
    className="rounded-3xl max-w-full w-[600px] h-auto object-cover"
    src={Res}
    alt="landing platform"
  />
</div>
<h1 className="text-2xl font-bold mb-2">Latest Research</h1>
<div className="flex items-center p-6">
  {/* Image on the left */}
  <img
    src="https://cdn.prod.website-files.com/5ec7dad2e6f6295a9e2a23dd/6808033ad36887b84250132a_Blog_Header%20Image_1500x600.png"
    alt="Blog Header"
    className="w-1/2 rounded-xl object-cover"
  />

  {/* Content on the right */}
  <div className="ml-6">
  <p className="text-gray-600">
  <span className="font-bold block mb-1">
    Apr 23, 2025<br />
    The Future Workforce Index: Evolving Talent Trends in 2025 and Beyond
  </span>
  Research from The Upwork Research Institute reveals that skilled freelance knowledge workers are reshaping careers, leading the AI race and boosting U.S. economic growth.
</p>

  </div>

</div>
<div className="flex flex-wrap justify-center gap-6 p-6">
  {/* First Card */}
  <div className="w-full md:w-[300px]">
    <img
      src="https://cdn.prod.website-files.com/5ec7dad2e6f6295a9e2a23dd/6808033ad36887b84250132a_Blog_Header%20Image_1500x600.png"
      alt="Future Workforce"
      className="rounded-xl object-cover w-full h-48"
    />
    <div className="mt-3 text-gray-700">
      <p className="font-bold">
        Apr 23, 2025<br />
        The Future Workforce Index: Evolving Talent Trends in 2025 and Beyond
      </p>
      
    </div>
  </div>

  {/* Second Card */}
  <div className="w-full md:w-[300px]">
    <img
      src="https://cdn.prod.website-files.com/5ec7dad2e6f6295a9e2a23dd/6780b588d907b894cf404ed6_In-Demand%20Skills%202025%20Header%20Image.jpg"
      alt="In-Demand Skills"
      className="rounded-xl object-cover w-full h-48"
    />
    <div className="mt-3 text-gray-700">
      <p className="font-bold">
        Jan 15, 2025<br />
        The Most In-Demand Skills for 2025: Navigating Skills-Based Work in a Dynamic Economy
      </p>
      
    </div>
  </div>

  {/* Third Card */}
  <div className="w-full md:w-[300px]">
    <img
      src="https://cdn.prod.website-files.com/5ec7dad2e6f6295a9e2a23dd/6760406b24f0d6588f515c6c_ai-enhance-collective-intelligence-p-1600.jpg"
      alt="AI and Collective Intelligence"
      className="rounded-xl object-cover w-full h-48"
    />
    <div className="mt-3 text-gray-700">
      <p className="font-bold">
        Dec 16, 2024<br />
        Using AI to Enhance Collective Intelligence: A Conversation with Anita Williams Woolley, Ella Glikson, and Pranav Gupta
      </p>
     
    </div>
  </div>
</div>
<h2 className="text-2xl font-bold">In the News</h2>
<div className="flex flex-wrap justify-center gap-6 p-6">
<div className="flex flex-wrap justify-center gap-6 p-6">
  {/* First Image and Text */}
  <div className="w-full md:w-[300px]">
    <img
      src="https://cdn.prod.website-files.com/5ec7dad2e6f6295a9e2a23dd/681d4896ecf45139ab05abf5_HBS%20Managing%20the%20Future%20of%20Work.jpeg"
      alt="HBS Future of Work"
      className="h-48 w-full object-cover rounded-xl"
    />
    <p className="mt-2 text-sm text-gray-700 font-medium">
      May 8, 2025<br />
      HBS Managing The Future of Work Podcast: Upwork’s Hayden Brown on bridging volatility with contingency
    </p>
  </div>

  {/* Second Image and Text */}
  <div className="w-full md:w-[300px]">
    <img
      src="https://cdn.prod.website-files.com/5ec7dad2e6f6295a9e2a23dd/68065eefc681045b86d17635_Visual.png"
      alt="Visual 1"
      className="h-48 w-full object-cover rounded-xl"
    />
    <p className="mt-2 text-sm text-gray-700 font-medium">
      March 18, 2025<br />
      Fast Company: The Most Innovative Human Resources Companies of 2025
    </p>
  </div>

  {/* Third Image and Text */}
  <div className="w-full md:w-[300px]">
    <img
      src="https://cdn.prod.website-files.com/5ec7dad2e6f6295a9e2a23dd/68065f3f32fbff33872429d4_Visual%20(1).png"
      alt="Visual 2"
      className="h-48 w-full object-cover rounded-xl"
    />
    <p className="mt-2 text-sm text-gray-700 font-medium">
      January 22, 2025<br />
      Entrepreneur: Don't Expect to Get a New Job in 2025 If You Lack These 2 Skill Sets, New Report Reveals
    </p>
  </div>
</div>

</div>


     </>
  )
}
