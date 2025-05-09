import React, { useState } from 'react'
import { CiCreditCard1 } from "react-icons/ci";
import { PiAddressBookLight } from "react-icons/pi";
import { BiHide,BiShow } from "react-icons/bi";

function ClientProfile() {

    const[industry,setIndustry] = useState("")
    const [showCard, setShowCard] = useState(false);
    const [strokeWidth, setstrokeWidth] = useState({
        name: '',
        cardNumber: '',
        expiryDate: '',
        cvc: '',
        billingAddress: '',
      });

        const [user, setUser] = useState({
        _id: "ObjectId",
        email: "johndoe@gmail.com",
        password: "hashed_pw",
        role: "client",
        name: "John Doe",
        location: "Lahore",
        balance: "0",
        strokeWidth: {
            cardNumber: "5555555555554444",
            expiryDate: "11/27",
            cvv: "456",
            billingAddress: "456 Business Road, Karachi"
        },
        freelancerProfile: {
            skills: ["React", "Node.js"],
            hourlyRate: 30,
            experienceLevel: "intermediate",
            bio: "Experienced web developer...",
            proposals: ["proposalId1", "proposalId2"]
        },
        clientProfile: {
            companyName: "Tech Innovate",
            jobsPosted: ["jobId1", "jobId2"],
            industry: "Tech & IT",
            companyWebsite: "https://techinnovate.com",
            description: "Lorem ipsum dolor sit, amet consectetur..."
        },
        createdAt: "2024-01-01T00:00:00Z"
        });


    const[description,setDescription] = useState(user.clientProfile.description || "");
    function handleIndustryChange(e)
    {
        e.preventDefault();
        setIndustry(e.target.value);
    }
    function handleDescriptionChange(e)
    {
        e.preventDefault();
        setDescription(e.target.value);
    }
    const toggleCardVisibility = () => {
        setShowCard((prev) => !prev);
      };
    
    const handleChange = (e) => {
        const { name, value } = e.target;
        setstrokeWidth((prev) => ({
          ...prev,
          [name]: value,
        }));
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit?.(billingInfo);
        console.log('Billing Info:', billingInfo);
        // send to backend
      };
      const handleDeleteBillingInfo = () => {
        setUser(prev => ({
          ...prev,
          billingInfo: {
            cardNumber: "",
            expiryDate: "",
            cvv: "",
            billingAddress: ""
          }
        }));
      };
      
      const maskedCard = user.billingInfo.cardNumber.replace(/\d(?=\d{4})/g, '*');
  return (
    <div className='text-4xl m-20'>
        <h2 className='text-5xl font-semibold my-6'>My Info</h2>
        <p className='my-6'>This is a {user.role.toLowerCase()} account</p>
        <div className='border-2 border-solid border-[#d9d9d9] px-20 py-16 my-12 rounded-3xl'>
            <h4 className='text-5xl font-semibold my-12'>Account</h4>
            <div className='flex items-start gap-40'>
                <div>
                    <svg className='bg-[#d9d9d9] rounded-full size-44' xmlns="http://www.w3.org/2000/svg" fill="none" aria-hidden="true" viewBox="0 0 24 24" role="img"><path vectorEffect="non-scaling-stroke" stroke="var(--icon-color, #001e00)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.5" d="M12 21a9 9 0 100-18 9 9 0 000 18z"></path><path vectorEffect="non-scaling-stroke" stroke="var(--icon-color, #001e00)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.5" d="M12 11.73a2.97 2.97 0 100-5.94 2.97 2.97 0 000 5.94zm0 1.89c-2.88 0-5.31 2.34-5.31 5.31v.36C8.22 20.37 10.02 21 12 21c1.98 0 3.78-.63 5.31-1.71v-.36c0-2.88-2.43-5.31-5.31-5.31z"></path></svg>
                </div>
                <div>
                    <p className='font-semibold my-6'>{user.name}</p>
                    <p className='text-[#676767] my-6'>{user.role} Marketplace</p>
                    <p className='font-semibold my-6'>{user.clientProfile.companyName}</p>
                    <p className='text-[#676767] my-6'>Email</p>
                    <p className='font-semibold my-6'>{user.email}</p>
                </div>
            </div>
        </div>
        <div className='border-2 border-solid border-[#d9d9d9] px-20 py-16 my-12 rounded-3xl'>
            <h4 className='text-5xl font-semibold my-12'>Compnay details</h4>
            <div className='flex items-start gap-40'>
                <div>
                    <svg className='size-44 rounded-full bg-[#d9d9d9]' xmlns="http://www.w3.org/2000/svg" fill="none" aria-hidden="true" viewBox="0 0 24 24" role="img"><path vectorEffect="non-scaling-stroke" stroke="var(--icon-color, #001e00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M11 11V3h10v18h-8"></path><path vectorEffect="non-scaling-stroke" stroke="var(--icon-color, #001e00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13 11H3v10h10V11zm-7 3.5h4m-4 3h4m4-12h4m-4 3h4"></path></svg>
                </div>
                <div>
                    <p className='font-semibold my-6'>{user.clientProfile.companyName}</p>
                    <label htmlFor="industry">Add your industry</label><br/>
                    <select name="industry" id="industry" onChange={handleIndustryChange} defaultValue={user.clientProfile.industry || ""} className='border-2 border-black border-solid p-4 rounded-xl my-6'>
                        <option value="" disabled hidden>Select your industry</option>
                        <option value="Aerospace">Aerospace</option>
                        <option value="Agriculture & Forestry">Agriculture & Forestry</option>
                        <option value="Art & Design">Art & Design</option>
                        <option value="Automotive">Automotive</option>
                        <option value="Aviation">Aviation</option>
                        <option value="Education">Education</option>
                        <option value="Energy & Utilities">Energy & Utilities</option>
                        <option value="Engineering & Architecture">Engineering & Architecture</option>
                        <option value="Fashion & Beauty">Fashion & Beauty</option>
                        <option value="Finance & Accounting">Finance & Accounting</option>
                        <option value="Food & Beverage">Food & Beverage</option>
                        <option value="Government & Public Sector">Government & Public Sector</option>
                        <option value="Health & Fitness">Health & Fitness</option>
                        <option value="HR & Business Services">HR & Business Services</option>
                        <option value="Legal">Legal</option>
                        <option value="Manufacturing & Construction">Manufacturing & Construction</option>
                        <option value="Media & Entertainment">Media & Entertainment</option>
                        <option value="Military & Defense">Military & Defense</option>
                        <option value="Mining">Mining</option>
                        <option value="Real Estate">Real Estate</option>
                        <option value="Retail & Consumer Goods">Retail & Consumer Goods</option>
                        <option value="Sales & Marketing">Sales & Marketing</option>
                        <option value="Science & Medicine">Science & Medicine</option>
                        <option value="Sports & Recreation">Sports & Recreation</option>
                        <option value="Supply Chain & Logistics">Supply Chain & Logistics</option>
                        <option value="Tech & IT">Tech & IT</option>
                        <option value="Transportation & Warehousing">Transportation & Warehousing</option>
                        <option value="Travel & Hospitality">Travel & Hospitality</option>
                    </select>
                    <br/> 
                    <label htmlFor="description" >Description</label>
                    <textarea value={description} onChange={handleDescriptionChange} name="description" id="description" className='rounded-3xl w-full h-80 border-2 border-black border-solid my-6 p-3'>

                    </textarea>
                </div>
            </div>
        </div>
        <div className='border-2 border-solid border-[#d9d9d9] px-20 py-16 my-12 rounded-3xl'>
            <h3 className='text-5xl font-semibold'>Balance: ${user.balance}</h3>
        </div>
        {
            user.billingInfo.cardNumber!==""?(
                <div className='border-2 border-solid border-[#d9d9d9] px-20 py-16 my-12 rounded-3xl'>
                <h2 className='text-5xl font-semibold my-6'>Your payment address</h2>
    
                <div className='border-2 border-solid border-[#d9d9d9] p-10'>
                    <div className='flex items-start justify-between'>
                    <div className='flex flex-col gap-2'>
                        <div className='flex items-center gap-6'>
                        <CiCreditCard1 className='size-16' />
                        <h5 className='my-6 tracking-widest'>
                            {showCard ? user.billingInfo.cardNumber : maskedCard}
                        </h5>
                        <button
                        onClick={toggleCardVisibility}
                        className='text-blue-600 ml-20 hover:underline text-sm w-fit'
                        >
                        {showCard ? <BiHide className='size-12 text-[#676767]'/> : <BiShow className='size-12 text-[#676767]'/>}
                        </button>
                        </div>
                    </div>
    
                    <button onClick={handleDeleteBillingInfo} className='text-red-600 px-8 py-4 hover:underline'>Delete</button>
                    </div>
    
                    <div className='flex items-center gap-6 mt-6'>
                    <PiAddressBookLight className='size-16' />
                    <p>{user.billingInfo.billingAddress}</p>
                    </div>
                </div>
            </div>
            ):(
                <div className='border-2 border-solid border-[#d9d9d9] px-20 py-16 my-12 rounded-3xl'>
                <form onSubmit={handleSubmit}>
                    <h2 className="text-5xl font-semibold mb-6">Add Billing Method</h2>
    
                    <label className="block mb-6">
                        Full Name
                        <input
                        type="text"
                        name="name"
                        value={billingInfo.name}
                        onChange={handleChange}
                        className="w-full border px-5 py-4 rounded mt-4"
                        required
                        />
                    </label>
    
                    <label className="block mb-6">
                        Card Number
                        <input
                        type="text"
                        name="cardNumber"
                        value={billingInfo.cardNumber}
                        onChange={handleChange}
                        maxLength="19"
                        className="w-full border px-5 py-4 rounded mt-4"
                        required
                        />
                    </label>
    
                    <div className="flex gap-4 mb-6">
                        <label className="flex-1">
                        Expiry Date (MM/YY)
                        <input
                            type="text"
                            name="expiryDate"
                            value={billingInfo.expiryDate}
                            onChange={handleChange}
                            placeholder="MM/YY"
                            className="w-full border px-5 py-4 rounded mt-4"
                            required
                        />
                        </label>
    
                        <label className="flex-1">
                        CVC
                        <input
                            type="text"
                            name="cvc"
                            value={billingInfo.cvc}
                            onChange={handleChange}
                            maxLength="4"
                            className="w-full border px-5 py-4 rounded mt-4"
                            required
                        />
                        </label>
                    </div>
    
                    <label className="block mb-6">
                        Billing Address
                        <input
                        type="text"
                        name="billingAddress"
                        value={billingInfo.billingAddress}
                        onChange={handleChange}
                        className="w-full border px-5 py-4 rounded mt-4"
                        required
                        />
                    </label>
    
                    <button type="submit" className="bg-blue-600 text-white px-8 py-5 rounded hover:bg-blue-700">
                        Save Billing Method
                    </button>
                </form>
            </div>
            )
        }
    </div>
  )
}

export default ClientProfile