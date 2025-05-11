<<<<<<< HEAD:Flex-Work-App-main/frontend/src/pages/findtalent/JobPost.jsx
import React, { useState } from 'react'
import { CiSearch } from "react-icons/ci";
import { RxCross1 } from "react-icons/rx";


function JobPost() {
    
    const [skills,setSkills] = useState([]);
    const [scope,setScope] = useState("");
    const [duration, setDuration] = useState("");
    const [experience,setExperience] = useState("");
    const [isFullTime,setIsFullTime] = useState(false);
    const [rateType,setRateType] = useState("")
    const [cost,setCost] = useState(0.0);
    const [title,setTitle] = useState("");
    const [roleType,setRoleType]  = useState("");
    const [hoursPerWeek,setHoursPerWeek] = useState("");
    const [locatoin,setLocation] = useState("");

    const exampleTitles = [
        'Build responsive WordPress site with booking/payment functionality',
        'Graphic designer needed to design ad creative for multiple campaigns',
        'Developer needed to update Android app UI for new OS/device specs'
    ];
    const exampleRoleTypes =[
        'Full Stack Developer – Skilled in both frontend and backend technologies (e.g., React, Node.js, MongoDB).',
        'UI/UX Designer – Focuses on user interface and experience design using tools like Figma, Adobe XD.',
        'Data Analyst – Specializes in analyzing datasets and creating reports using tools like Python, Excel, or Power BI.'
    ];
    const descriptionKeypoints = [
        'Clear expectations about your task or deliverables',
        'The skills required for your work',
        'Good communication',
        'Details about how you or your team like to work'
    ]


    const capitalized = str => str && str[0].toUpperCase() + str.slice(1);
    function handleAddSkill(e)
    {
        if (e.key === 'Enter') 
        {            
            e.preventDefault();
            let skill = capitalized(e.target.value.trim());
            if(!skills.includes(skill))
            {
                setSkills((prev) => [...prev, skill]);
                e.target.value = ""
            }
        }
    }
    function handleDeleteSkill(skillToDelete) {
        setSkills(prev => prev.filter(skill => skill !== skillToDelete));
      }
    function handlePostJob(e)
    {
        e.preventDefault()
    }
    function handleCancel(e)
    {
        e.preventDefault();
    }
    function handleTitleChange(e){
        e.preventDefault();
        setTitle(e.target.value.trim());
    }
    function handleRoleTypeChange(e)
    {
        e.preventDefault();
        setRoleType(e.target.value.trim());
    }
      
  return (
    <div className='mx-20'>
        <h2 className='text-8xl font-semibold my-10'>Post job</h2>
        <div>
            <div className='flex items-start gap-20 my-20'>
                <div className='w-3/12'>
                    <h3 className='text-6xl font-semibold'>Lets start with a strong title</h3>
                    <p className='text-3xl my-10'>This helps your job post stand out to the right candidates. It’s the first thing they’ll see, so make it count!</p>               
                </div>
                <div>
                <div className='w-5/12 text-3xl'>
                    <label className='block my-5 font-semibold' htmlFor="title">Write a title for your job post</label>
                    <input className='border-solid border-black border-2 px-8 py-4 w-full rounded-xl mb-10' type="text" required id='title' onChange={handleTitleChange}/>
                    <ul className='list-disc'>
                        <h6 className='font-semibold my-5'>Example titles</h6>
                        {
                            exampleTitles.map((title,index)=>{
                                return <li className='mx-8 my-2' key={index}>{title}</li>
                            })
                        }
                    </ul>
                </div>
                <div className='w-5/12 text-3xl'>
                    <label className='block my-5 font-semibold' htmlFor="roletype">Write a role type for your job post</label>
                    <input className='border-solid border-black border-2 px-8 py-4 w-full rounded-xl mb-10' type="text" required id='roletype' onChange={handleRoleTypeChange}/>
                    <ul className='list-disc'>
                        <h6 className='font-semibold my-5'>Example role types</h6>
                        {
                            exampleRoleTypes.map((role,index)=>{
                                return <li className='mx-8 my-2' key={index}>{role}</li>
                            })
                        }
                    </ul>
                </div>
                </div>
            </div>

            <div className='text-3xl flex items-start gap-20 my-20'> 
                <div className='w-3/12'>
                    <h3 className='text-6xl font-semibold'>What are the main skills required for your work?</h3>
                </div>
                <div className='w-5/12'>
                    <label htmlFor="skills">Search skills or add your own</label>
                    <div className="relative mt-5 mb-10">
                    <CiSearch className="absolute size-12 top-1/2 left-3 transform -translate-y-1/2 text-gray-500" />
                    <input
                        className="border-solid border-black border-2 pl-16 pr-4 py-4 w-full rounded-xl"
                        type="text"
                        required
                        id="skills"
                        onKeyDown={handleAddSkill}
                    />
                    </div>
                    <div className='flex items-center gap-4'>
                        <svg className='size-12' xmlns="http://www.w3.org/2000/svg" fill="none" aria-hidden="true" viewBox="0 0 24 24" role="img"><path vectorEffect="non-scaling-stroke" stroke="var(--icon-color, #001e00)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.5" d="M12 21a9 9 0 100-18 9 9 0 000 18z"></path><path vectorEffect="non-scaling-stroke" stroke="var(--icon-color, #001e00)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.5" d="M11.7 7l1.2 3.2 3.5.2-2.7 2.2.9 3.4-2.9-1.9L8.8 16l.9-3.4L7 10.4l3.4-.2L11.7 7z" clipRule="evenodd"></path></svg>
                        <p>For the best results, add 3-5 skills</p>
                    </div>
                    <div>
                        {
                            skills.length > 0 ? (
                                <>
                                <h4 className='font-semibold my-5'>Selected skills</h4>
                                <ul className='flex items-center flex-wrap gap-10'>
                                    {
                                        skills.map((skill) => (
                                            <li key={skill}>
                                            <div className='inline-flex items-center gap-8 border-2 border-solid border-black rounded-full px-10 py-3'>
                                                <span>{skill}</span>
                                                <RxCross1 onClick={() => handleDeleteSkill(skill)} className="cursor-pointer" />
                                            </div>
                                            </li>
                                        ))
                                    }
                                </ul>
                                </>
                            ) : ""
                        }
                    </div>
                </div>
            </div>


            {/* scope of work */}
            
            <div className='flex items-start gap-20 my-20 sticky top-10 self-start h-fit'>
                <div className='w-3/12 '>
                    <h3 className='text-6xl font-semibold'>Next, estimate the scope of your work.</h3>
                    <p className='text-3xl my-10'>Consider the size of your project and the time it will take.</p>               
                </div>
                <div className="w-5/12 text-3xl">
                    <div>
                        <label className="flex items-center gap-x-4 text-center">
                            <input
                            required  
                            className='size-10 mr-2 accent-primary'
                            type="radio"
                            name="scope"
                            value="Large"
                            checked={scope === "Large"}
                            onChange={(e) => setScope(e.target.value)}
                            />
                            <span>Large</span>
                        </label>
                        <p className='text-[#676767] mx-16 my-3'>Longer term or complex initiatives (ex. design and build a full website)</p>
                    </div>
                    
                    <div>
                        <label className="flex items-center gap-x-4 text-center">
                            <input
                             className='size-10 mr-2 accent-primary'
                            type="radio"
                            name="scope"
                            value="Medium"
                            checked={scope === "Medium"}
                            onChange={(e) => setScope(e.target.value)}
                            />
                           <span>Medium</span>
                        </label>
                        <p className='text-[#676767] mx-16 my-3'>Well-defined projects (ex. a landing page)</p>
                    </div>
                    <div>                        
                        <label className="flex items-center gap-x-4 text-center">
                            <input
                             className='size-10 mr-2 accent-primary'
                            type="radio"
                            name="scope"
                            value="Small"
                            checked={scope === "Small"}
                            onChange={(e) => setScope(e.target.value)}
                            />
                            <span>Small</span>
                        </label>
                        <p className='text-[#676767] mx-16 my-3'>Quick and straightforward tasks (ex. update text and images on a webpage)</p>
                    </div>

                    {/* duration */}
                    <div className="text-3xl my-10">
                    <h3 className="font-semibold mb-6">How long will your work take?</h3>
                    <div className="flex flex-col gap-4">
                        {["More than 6 months", "3 to 6 months", "1 to 3 months", "Less than a month"].map(option => (
                        <label key={option} className="flex items-center gap-4">
                            <input
                            type="radio"
                            name="duration"
                            required  
                            value={option}
                            checked={duration === option}
                            onChange={(e) => setDuration(e.target.value)}
                            className="size-10 accent-primary"
                            />
                            <span>{option}</span>
                        </label>
                        ))}
                    </div>
                    </div>


                    {/* work per week */}
                    <div className="text-3xl my-10">
                    <h3 className="font-semibold mb-6">How long will you need work in a week?</h3>
                    <div className="flex flex-col gap-4">
                        {["More than 20 hours/week", "More than 30 hours/week", "More than 40 hours/week"].map(option => (
                        <label key={option} className="flex items-center gap-4">
                            <input
                            type="radio"
                            name="duration"
                            required  
                            value={option}
                            checked={hoursPerWeek === option}
                            onChange={(e) => setHoursPerWeek(e.target.value)}
                            className="size-10 accent-primary"
                            />
                            <span>{option}</span>
                        </label>
                        ))}
                    </div>

                    </div>

                    {/* experience */}
                
                    <div className="text-3xl my-10">
                    <h3 className="font-semibold mb-6">What level of experience will it need?</h3>
                    <p className='mb-6 text-[#676767]'>This won't restrict any proposals, but helps match expertise to your budget.</p>
                    <div className="flex flex-col gap-4">
                        {["Entry", "Intermediate", "Expert"].map(option => (
                        <label key={option} className="flex items-center gap-4">
                            <input
                            type="radio"
                            required  
                            name="experience"
                            value={option}
                            checked={experience === option}
                            onChange={(e) => setExperience(e.target.value)}
                            className="size-10 accent-primary"
                            />
                            <span>{option}</span>
                        </label>
                        ))}
                    </div>
                    </div>

                    {/* contract to hire */}
                    <div className="text-3xl my-10">
                        <h3 className="font-semibold mb-6">Is this job a contract-to-hire opportunity?</h3>
                        <p className='mb-6 text-[#676767]'>This helps set expectations with talent and won't restrict who can submit proposals.</p>
                        <div className="flex flex-col gap-4">
                            <div>
                                <label className="flex items-center gap-x-4 text-center">
                                    <input
                                    className='size-10 mr-2 accent-primary'
                                    type="radio"
                                    name="fulltime"
                                    value="true"
                                    required  
                                    checked={isFullTime === true}
                                    onChange={(e) => setIsFullTime(true)}
                                    />
                                    <span>Yes, this could become full time</span>
                                </label>
                                <p className='text-[#676767] mx-16 my-3'>After a trial period, you can pay a one-time fee to convert the contract. </p>
                            </div>
                            <div>
                                <label className="flex items-center gap-x-4 text-center">
                                    <input
                                    className='size-10 mr-2 accent-primary'
                                    type="radio"
                                    name="fulltime"
                                    value="false"
                                    checked={isFullTime === false}
                                    onChange={(e) => setIsFullTime(false)}
                                    />
                                    <span>No, not at this time</span>
                                </label>
                            </div>
                        </div>
                    </div>

                        <div className="text-3xl my-10">
                    <h3 className="font-semibold mb-6">Is this opportunity remote or onsite?</h3>
                    <div className="flex flex-col gap-4">
                        {["Remote", "Onsite"].map(option => (
                        <label key={option} className="flex items-center gap-4">
                            <input
                            type="radio"
                            name="duration"
                            required  
                            value={option}
                            checked={location === option}
                            onChange={(e) => setLocation(e.target.value)}
                            className="size-10 accent-primary"
                            />
                            <span>{option}</span>
                        </label>
                        ))}
                    </div>

                    </div>

                </div>
            </div>

            <div className='flex items-start gap-20 my-20 sticky top-10 self-start h-fit'>
                <div className='w-3/12 '>
                    <h3 className='text-6xl font-semibold'>Tell us about your budget.</h3>
                    <p className='text-3xl my-10'>This will help us match you to talent within your range.</p>               
                </div>
                <div className="w-5/12 text-3xl">
                    <div className="flex items-center gap-16">
                        
                        <label className="flex items-start gap-x-4 border-2 hover:border-4 border-black border-solid p-7 rounded-xl">
                            <div>
                                <svg className='size-12 m-3' xmlns="http://www.w3.org/2000/svg" fill="none" aria-hidden="true" viewBox="0 0 24 24" role="img"><path vectorEffect="non-scaling-stroke" stroke="var(--icon-color, #001e00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 21a9 9 0 100-18 9 9 0 000 18z"></path><path vectorEffect="non-scaling-stroke" stroke="var(--icon-color, #001e00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M16.24 16.24L12 12V6"></path></svg>
                                <span className='m-3'>Hourly rate</span>
                            </div>
                            <input
                            className='size-10 mr-2 mt-3 accent-primary'
                            type="radio"
                            name="ratetype"
                            value="Hourly"
                            required  
                            checked={rateType === "Hourly"}
                            onChange={(e) => setRateType(e.target.value)}
                            />
                                    
                        </label>
                        
                        <label className="flex items-start gap-x-4 border-2 hover:border-4 border-black border-solid p-7 rounded-xl">
                            <div>
                                <svg className='size-12 m-3' xmlns="http://www.w3.org/2000/svg" fill="none" aria-hidden="true" viewBox="0 0 24 24" role="img"><path vectorEffect="non-scaling-stroke" stroke="var(--icon-color, #001e00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13.17 3H21v7.83L10.83 21 3 13.17 13.17 3z"></path><path vectorEffect="non-scaling-stroke" stroke="var(--icon-color, #001e00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9.63 11.51a1.86 1.86 0 00.3 2.56 1.86 1.86 0 002.56.3 1.51 1.51 0 00.27-1.68c-.25-.54-.87-1.56-1.08-2.12A1.4 1.4 0 0112 9.12a1.84 1.84 0 012.55.31 1.84 1.84 0 01.33 2.57m-.31-2.57l.81-.81m-6.26 6.26l.81-.81m7.94-7.39a.55.55 0 100-1.1.55.55 0 000 1.1z"></path></svg>
                                <span className='m-3'>Fixed price</span>
                            </div>
                            <input
                            className='size-10 mr-2 mt-3 accent-primary'
                            type="radio"
                            name="ratetype"
                            value="Fixed Price"
                            checked={rateType === "Fixed Price"}
                            onChange={(e) => setRateType(e.target.value)}
                            />
                        </label>
                            
                    </div>
                      
                    <div className='text-3xl my-16'>
                        <h5 className='font-semibold my-5'>What is the best cost estimate for your project?</h5>
                        <p className='text-[#676767]'>You can negotiate this cost and create milestones when you chat with your freelancer.</p>
                        <input type="number" onChange={(e)=>{e.preventDefault();setCost(parseFloat(e.target.value))}} required min="0" className='my-8 border-2 border-black border-solid px-8 py-5 rounded-xl'/>
                    </div>

                </div>

            </div>


            {/* description */}
            <div className='flex items-start gap-x-20 mb-20'>
                <div className='w-3/12'>
                    <h3 className='text-6xl font-semibold'>Start the conversation.</h3>
                    <ul className='list-disc text-3xl'>
                        <h6 className='font-semibold my-5'>Talent are looking for:</h6>
                        {
                            descriptionKeypoints.map((title,index)=>{
                                return <li className='mx-8 my-2' key={index}>{title}</li>
                            })
                        }
                    </ul>              
                </div>
                <div className='w-5/12 text-3xl'>
                    <p className='mb-6'>Describe what you need</p>
                    <textarea placeholder='Already have a description? Paste it here!' name="description" id="description" required className='p-4 h-96 w-full border-2 border-black border-solid hover:border-4'></textarea>  
                </div>
            </div>

        </div>
        <div className='flex items-center gap-16 text-4xl my-20'>
          <button onClick={handlePostJob}  className='bg-primary hover:bg-primaryHover text-white p-6 rounded-lg'>
            Post this job
          </button>
          <button onClick={handleCancel}  className='bg-white hover:text-primaryHover hover:bg-[#E8F5E9] text-primary p-6 border-2 border-solid border-primary rounded-lg'>
            Cancel
          </button>
        </div>

    </div>
  )
}

=======
import React, { useState } from 'react'
import { CiSearch } from "react-icons/ci";
import { RxCross1 } from "react-icons/rx";


function JobPost() {
    
    const [skills,setSkills] = useState([]);
    const [scope,setScope] = useState("");
    const [duration, setDuration] = useState("");
    const [experience,setExperience] = useState("");
    const [isFullTime,setIsFullTime] = useState(false);
    const [rateType,setRateType] = useState("")
    const [cost,setCost] = useState(0.0);
    const [title,setTitle] = useState("");
    const [roleType,setRoleType]  = useState("");
    const [hoursPerWeek,setHoursPerWeek] = useState("");
    const [locatoin,setLocation] = useState("");

    const exampleTitles = [
        'Build responsive WordPress site with booking/payment functionality',
        'Graphic designer needed to design ad creative for multiple campaigns',
        'Developer needed to update Android app UI for new OS/device specs'
    ];
    const exampleRoleTypes =[
        'Full Stack Developer – Skilled in both frontend and backend technologies (e.g., React, Node.js, MongoDB).',
        'UI/UX Designer – Focuses on user interface and experience design using tools like Figma, Adobe XD.',
        'Data Analyst – Specializes in analyzing datasets and creating reports using tools like Python, Excel, or Power BI.'
    ];
    const descriptionKeypoints = [
        'Clear expectations about your task or deliverables',
        'The skills required for your work',
        'Good communication',
        'Details about how you or your team like to work'
    ]


    const capitalized = str => str && str[0].toUpperCase() + str.slice(1);
    function handleAddSkill(e)
    {
        if (e.key === 'Enter') 
        {            
            e.preventDefault();
            let skill = capitalized(e.target.value.trim());
            if(!skills.includes(skill))
            {
                setSkills((prev) => [...prev, skill]);
                e.target.value = ""
            }
        }
    }
    function handleDeleteSkill(skillToDelete) {
        setSkills(prev => prev.filter(skill => skill !== skillToDelete));
      }
    function handlePostJob(e)
    {
        e.preventDefault()
    }
    function handleCancel(e)
    {
        e.preventDefault();
    }
    function handleTitleChange(e){
        e.preventDefault();
        setTitle(e.target.value.trim());
    }
    function handleRoleTypeChange(e)
    {
        e.preventDefault();
        setRoleType(e.target.value.trim());
    }
    function handlePostJob(e) {
    e.preventDefault();

    const clientId = localStorage.getItem('clientId'); // Get clientId from localStorage

    if (!clientId) {
      // Handle case where clientId doesn't exist, maybe redirect to login page
      console.error("User is not logged in");
      return;
    }
    const jobData = {
        title,
        postedTime: new Date().toISOString(),
        location,
        type: isFullTime ? "Full-Time" : "Part-Time",
        roleType,
        budget: {
            amount: cost,
            paymentType: rateType, // Must be 'Hourly' or 'Fixed Price'
            experienceLevel: experience, // Must be one of the enum values
        },
        estimatedDuration: duration, // Must match enum values
        workload: hoursPerWeek, // Or another label like 'Less than 30 hrs/week'
        description, // You didn't have this in your code earlier
        skills,
        clientId: clientId, // Required; must be passed from frontend or middleware
    };


    axios.post('http://localhost:5000/api/jobs', jobData)  // Update with your actual API URL
        .then(response => {
            console.log('Job posted successfully:', response.data);
            alert("Job posted successfully!");
            // Optionally reset form or redirect
        })
        .catch(error => {
            console.error('Error posting job:', error);
            alert("Failed to post job. Please try again.");
        });
}

  return (
    <div className='mx-20'>
        <h2 className='text-8xl font-semibold my-10'>Post job</h2>
        <div>
            <div className='flex items-start gap-20 my-20'>
                <div className='w-3/12'>
                    <h3 className='text-6xl font-semibold'>Lets start with a strong title</h3>
                    <p className='text-3xl my-10'>This helps your job post stand out to the right candidates. It’s the first thing they’ll see, so make it count!</p>               
                </div>
                <div>
                <div className='w-5/12 text-3xl'>
                    <label className='block my-5 font-semibold' htmlFor="title">Write a title for your job post</label>
                    <input className='border-solid border-black border-2 px-8 py-4 w-full rounded-xl mb-10' type="text" required id='title' onChange={handleTitleChange}/>
                    <ul className='list-disc'>
                        <h6 className='font-semibold my-5'>Example titles</h6>
                        {
                            exampleTitles.map((title,index)=>{
                                return <li className='mx-8 my-2' key={index}>{title}</li>
                            })
                        }
                    </ul>
                </div>
                <div className='w-5/12 text-3xl'>
                    <label className='block my-5 font-semibold' htmlFor="roletype">Write a role type for your job post</label>
                    <input className='border-solid border-black border-2 px-8 py-4 w-full rounded-xl mb-10' type="text" required id='roletype' onChange={handleRoleTypeChange}/>
                    <ul className='list-disc'>
                        <h6 className='font-semibold my-5'>Example role types</h6>
                        {
                            exampleRoleTypes.map((role,index)=>{
                                return <li className='mx-8 my-2' key={index}>{role}</li>
                            })
                        }
                    </ul>
                </div>
                </div>
            </div>

            <div className='text-3xl flex items-start gap-20 my-20'> 
                <div className='w-3/12'>
                    <h3 className='text-6xl font-semibold'>What are the main skills required for your work?</h3>
                </div>
                <div className='w-5/12'>
                    <label htmlFor="skills">Search skills or add your own</label>
                    <div className="relative mt-5 mb-10">
                    <CiSearch className="absolute size-12 top-1/2 left-3 transform -translate-y-1/2 text-gray-500" />
                    <input
                        className="border-solid border-black border-2 pl-16 pr-4 py-4 w-full rounded-xl"
                        type="text"
                        required
                        id="skills"
                        onKeyDown={handleAddSkill}
                    />
                    </div>
                    <div className='flex items-center gap-4'>
                        <svg className='size-12' xmlns="http://www.w3.org/2000/svg" fill="none" aria-hidden="true" viewBox="0 0 24 24" role="img"><path vectorEffect="non-scaling-stroke" stroke="var(--icon-color, #001e00)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.5" d="M12 21a9 9 0 100-18 9 9 0 000 18z"></path><path vectorEffect="non-scaling-stroke" stroke="var(--icon-color, #001e00)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.5" d="M11.7 7l1.2 3.2 3.5.2-2.7 2.2.9 3.4-2.9-1.9L8.8 16l.9-3.4L7 10.4l3.4-.2L11.7 7z" clipRule="evenodd"></path></svg>
                        <p>For the best results, add 3-5 skills</p>
                    </div>
                    <div>
                        {
                            skills.length > 0 ? (
                                <>
                                <h4 className='font-semibold my-5'>Selected skills</h4>
                                <ul className='flex items-center flex-wrap gap-10'>
                                    {
                                        skills.map((skill) => (
                                            <li key={skill}>
                                            <div className='inline-flex items-center gap-8 border-2 border-solid border-black rounded-full px-10 py-3'>
                                                <span>{skill}</span>
                                                <RxCross1 onClick={() => handleDeleteSkill(skill)} className="cursor-pointer" />
                                            </div>
                                            </li>
                                        ))
                                    }
                                </ul>
                                </>
                            ) : ""
                        }
                    </div>
                </div>
            </div>


            {/* scope of work */}
            
            <div className='flex items-start gap-20 my-20 sticky top-10 self-start h-fit'>
                <div className='w-3/12 '>
                    <h3 className='text-6xl font-semibold'>Next, estimate the scope of your work.</h3>
                    <p className='text-3xl my-10'>Consider the size of your project and the time it will take.</p>               
                </div>
                <div className="w-5/12 text-3xl">
                    <div>
                        <label className="flex items-center gap-x-4 text-center">
                            <input
                            required  
                            className='size-10 mr-2 accent-primary'
                            type="radio"
                            name="scope"
                            value="Large"
                            checked={scope === "Large"}
                            onChange={(e) => setScope(e.target.value)}
                            />
                            <span>Large</span>
                        </label>
                        <p className='text-[#676767] mx-16 my-3'>Longer term or complex initiatives (ex. design and build a full website)</p>
                    </div>
                    
                    <div>
                        <label className="flex items-center gap-x-4 text-center">
                            <input
                             className='size-10 mr-2 accent-primary'
                            type="radio"
                            name="scope"
                            value="Medium"
                            checked={scope === "Medium"}
                            onChange={(e) => setScope(e.target.value)}
                            />
                           <span>Medium</span>
                        </label>
                        <p className='text-[#676767] mx-16 my-3'>Well-defined projects (ex. a landing page)</p>
                    </div>
                    <div>                        
                        <label className="flex items-center gap-x-4 text-center">
                            <input
                             className='size-10 mr-2 accent-primary'
                            type="radio"
                            name="scope"
                            value="Small"
                            checked={scope === "Small"}
                            onChange={(e) => setScope(e.target.value)}
                            />
                            <span>Small</span>
                        </label>
                        <p className='text-[#676767] mx-16 my-3'>Quick and straightforward tasks (ex. update text and images on a webpage)</p>
                    </div>

                    {/* duration */}
                    <div className="text-3xl my-10">
                    <h3 className="font-semibold mb-6">How long will your work take?</h3>
                    <div className="flex flex-col gap-4">
                        {["More than 6 months", "3 to 6 months", "1 to 3 months", "Less than 1 month"].map(option => (
                        <label key={option} className="flex items-center gap-4">
                            <input
                            type="radio"
                            name="duration"
                            required  
                            value={option}
                            checked={duration === option}
                            onChange={(e) => setDuration(e.target.value)}
                            className="size-10 accent-primary"
                            />
                            <span>{option}</span>
                        </label>
                        ))}
                    </div>
                    </div>


                    {/* work per week */}
                    <div className="text-3xl my-10">
                    <h3 className="font-semibold mb-6">How long will you need work in a week?</h3>
                    <div className="flex flex-col gap-4">
                        {["More than 20 hours/week", "More than 30 hours/week", "More than 40 hours/week"].map(option => (
                        <label key={option} className="flex items-center gap-4">
                            <input
                            type="radio"
                            name="duration"
                            required  
                            value={option}
                            checked={hoursPerWeek === option}
                            onChange={(e) => setHoursPerWeek(e.target.value)}
                            className="size-10 accent-primary"
                            />
                            <span>{option}</span>
                        </label>
                        ))}
                    </div>

                    </div>

                    {/* experience */}
                
                    <div className="text-3xl my-10">
                    <h3 className="font-semibold mb-6">What level of experience will it need?</h3>
                    <p className='mb-6 text-[#676767]'>This won't restrict any proposals, but helps match expertise to your budget.</p>
                    <div className="flex flex-col gap-4">
                        {["Beginner", "Intermediate", "Senior"].map(option => (
                        <label key={option} className="flex items-center gap-4">
                            <input
                            type="radio"
                            required  
                            name="experience"
                            value={option}
                            checked={experience === option}
                            onChange={(e) => setExperience(e.target.value)}
                            className="size-10 accent-primary"
                            />
                            <span>{option}</span>
                        </label>
                        ))}
                    </div>
                    </div>

                    {/* contract to hire */}
                    <div className="text-3xl my-10">
                        <h3 className="font-semibold mb-6">Is this job a contract-to-hire opportunity?</h3>
                        <p className='mb-6 text-[#676767]'>This helps set expectations with talent and won't restrict who can submit proposals.</p>
                        <div className="flex flex-col gap-4">
                            <div>
                                <label className="flex items-center gap-x-4 text-center">
                                    <input
                                    className='size-10 mr-2 accent-primary'
                                    type="radio"
                                    name="fulltime"
                                    value="true"
                                    required  
                                    checked={isFullTime === true}
                                    onChange={(e) => setIsFullTime(true)}
                                    />
                                    <span>Yes, this could become full time</span>
                                </label>
                                <p className='text-[#676767] mx-16 my-3'>After a trial period, you can pay a one-time fee to convert the contract. </p>
                            </div>
                            <div>
                                <label className="flex items-center gap-x-4 text-center">
                                    <input
                                    className='size-10 mr-2 accent-primary'
                                    type="radio"
                                    name="fulltime"
                                    value="false"
                                    checked={isFullTime === false}
                                    onChange={(e) => setIsFullTime(false)}
                                    />
                                    <span>No, not at this time</span>
                                </label>
                            </div>
                        </div>
                    </div>

                        <div className="text-3xl my-10">
                    <h3 className="font-semibold mb-6">Is this opportunity remote or onsite?</h3>
                    <div className="flex flex-col gap-4">
                        {["Remote", "Onsite"].map(option => (
                        <label key={option} className="flex items-center gap-4">
                            <input
                            type="radio"
                            name="duration"
                            required  
                            value={option}
                            checked={location === option}
                            onChange={(e) => setLocation(e.target.value)}
                            className="size-10 accent-primary"
                            />
                            <span>{option}</span>
                        </label>
                        ))}
                    </div>

                    </div>

                </div>
            </div>

            <div className='flex items-start gap-20 my-20 sticky top-10 self-start h-fit'>
                <div className='w-3/12 '>
                    <h3 className='text-6xl font-semibold'>Tell us about your budget.</h3>
                    <p className='text-3xl my-10'>This will help us match you to talent within your range.</p>               
                </div>
                <div className="w-5/12 text-3xl">
                    <div className="flex items-center gap-16">
                        
                        <label className="flex items-start gap-x-4 border-2 hover:border-4 border-black border-solid p-7 rounded-xl">
                            <div>
                                <svg className='size-12 m-3' xmlns="http://www.w3.org/2000/svg" fill="none" aria-hidden="true" viewBox="0 0 24 24" role="img"><path vectorEffect="non-scaling-stroke" stroke="var(--icon-color, #001e00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 21a9 9 0 100-18 9 9 0 000 18z"></path><path vectorEffect="non-scaling-stroke" stroke="var(--icon-color, #001e00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M16.24 16.24L12 12V6"></path></svg>
                                <span className='m-3'>Hourly rate</span>
                            </div>
                            <input
                            className='size-10 mr-2 mt-3 accent-primary'
                            type="radio"
                            name="ratetype"
                            value="Hourly"
                            required  
                            checked={rateType === "Hourly"}
                            onChange={(e) => setRateType(e.target.value)}
                            />
                                    
                        </label>
                        
                        <label className="flex items-start gap-x-4 border-2 hover:border-4 border-black border-solid p-7 rounded-xl">
                            <div>
                                <svg className='size-12 m-3' xmlns="http://www.w3.org/2000/svg" fill="none" aria-hidden="true" viewBox="0 0 24 24" role="img"><path vectorEffect="non-scaling-stroke" stroke="var(--icon-color, #001e00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13.17 3H21v7.83L10.83 21 3 13.17 13.17 3z"></path><path vectorEffect="non-scaling-stroke" stroke="var(--icon-color, #001e00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9.63 11.51a1.86 1.86 0 00.3 2.56 1.86 1.86 0 002.56.3 1.51 1.51 0 00.27-1.68c-.25-.54-.87-1.56-1.08-2.12A1.4 1.4 0 0112 9.12a1.84 1.84 0 012.55.31 1.84 1.84 0 01.33 2.57m-.31-2.57l.81-.81m-6.26 6.26l.81-.81m7.94-7.39a.55.55 0 100-1.1.55.55 0 000 1.1z"></path></svg>
                                <span className='m-3'>Fixed price</span>
                            </div>
                            <input
                            className='size-10 mr-2 mt-3 accent-primary'
                            type="radio"
                            name="ratetype"
                            value="Fixed Price"
                            checked={rateType === "Fixed Price"}
                            onChange={(e) => setRateType(e.target.value)}
                            />
                        </label>
                            
                    </div>
                      
                    <div className='text-3xl my-16'>
                        <h5 className='font-semibold my-5'>What is the best cost estimate for your project?</h5>
                        <p className='text-[#676767]'>You can negotiate this cost and create milestones when you chat with your freelancer.</p>
                        <input type="number" onChange={(e)=>{e.preventDefault();setCost(parseFloat(e.target.value))}} required min="0" className='my-8 border-2 border-black border-solid px-8 py-5 rounded-xl'/>
                    </div>

                </div>

            </div>


            {/* description */}
            <div className='flex items-start gap-x-20 mb-20'>
                <div className='w-3/12'>
                    <h3 className='text-6xl font-semibold'>Start the conversation.</h3>
                    <ul className='list-disc text-3xl'>
                        <h6 className='font-semibold my-5'>Talent are looking for:</h6>
                        {
                            descriptionKeypoints.map((title,index)=>{
                                return <li className='mx-8 my-2' key={index}>{title}</li>
                            })
                        }
                    </ul>              
                </div>
                <div className='w-5/12 text-3xl'>
                    <p className='mb-6'>Describe what you need</p>
                    <textarea placeholder='Already have a description? Paste it here!' name="description" id="description" required className='p-4 h-96 w-full border-2 border-black border-solid hover:border-4'></textarea>  
                </div>
            </div>

        </div>
        <div className='flex items-center gap-16 text-4xl my-20'>
          <button onClick={handlePostJob}  className='bg-primary hover:bg-primaryHover text-white p-6 rounded-lg'>
            Post this job
          </button>
          <button onClick={handleCancel}  className='bg-white hover:text-primaryHover hover:bg-[#E8F5E9] text-primary p-6 border-2 border-solid border-primary rounded-lg'>
            Cancel
          </button>
        </div>

    </div>
  )
}

>>>>>>> cbd0a131a4dcf32a52c69902999e0a4fc7ade991:frontend/src/pages/findtalent/JobPost.jsx
export default JobPost