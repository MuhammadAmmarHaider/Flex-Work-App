import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { GoOrganization } from "react-icons/go";
import { CiCreditCard1 } from "react-icons/ci";
import { PiAddressBookLight } from "react-icons/pi";
import { BiHide, BiShow } from "react-icons/bi";
import { updateUserField } from "../../redux/userSlice"

function FreelancerProfile() {

  const [showBillingInfo, setShowBillingInfo] = useState(true);
  const [isExpanded, setIsExpanded] = useState(false);
  const [showCard, setShowCard] = useState(false);
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const toggleCardVisibility = () => {
    setShowCard((prev) => !prev);
  };

  const toggleExpanded = () => {
    setIsExpanded((prev) => !prev);
  };
  const handleDeleteBillingInfo = (e) => {
    e.preventDefault();
    dispatch(updateUserField({
      path: 'billingInfo.cardNumber',
      value: ""
    }));
    dispatch(updateUserField({
      path: 'billingInfo.expiryDate',
      value: ""
    }));
    dispatch(updateUserField({
      path: 'billingInfo.cvc',
      value: ""
    }));
    dispatch(updateUserField({
      path: 'billingInfo.billingAddress',
      value: ""
    }));
  };

  function isFormComplete() {
    const isCardNumberValid = user.billingInfo.cardNumber.length === 16;
    const isNameValid = user.billingInfo.holderName.trim() !== '';
    const isBillingAddressValid = user.billingInfo.billingAddress.trim() !== '';
    const isExpiryValid = /^\d{2}\/\d{2}$/.test(user.billingInfo.expiryDate);
    const isCvcValid = /^\d{3}$/.test(user.billingInfo.cvc);
    return isCardNumberValid && isNameValid && isExpiryValid && isCvcValid && isBillingAddressValid;
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    if (isFormComplete()) {
      setShowBillingInfo(true);
    }
    else {
      alert("Please complete all fields correctly.");
      setShowBillingInfo(false);
    }
  };
  console.log(user);
  const isLong = user.freelancerProfile.bio.split(' ').length > 90;
  const maskedCard = user.billingInfo.cardNumber.replace(/\d(?=\d{4})/g, '*');

  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(user.freelancerProfile.title);
  const [editedRate, setEditedRate] = useState(user.freelancerProfile.hourlyRate);
  const [editedBio, setEditedBio] = useState(user.freelancerProfile.bio);
  const [newWorkHistory, setNewWorkHistory] = useState({
    title: '', company: '', description: '', startDate: '', endDate: ''
  });
  const [newEducation, setNewEducation] = useState({
    degree: '', institution: '', startDate: '', endDate: ''
  });

  const handleSave = () => {
    dispatch(updateUserField({ path: 'freelancerProfile.title', value: editedTitle }));
    dispatch(updateUserField({ path: 'freelancerProfile.hourlyRate', value: editedRate }));
    dispatch(updateUserField({ path: 'freelancerProfile.bio', value: editedBio }));
    setIsEditing(false);
  };

  const handleAddWorkHistory = () => {
    if (!newWorkHistory.title || !newWorkHistory.company) return;
    const updated = [...user.freelancerProfile.workHistory, newWorkHistory];
    dispatch(updateUserField({ path: 'freelancerProfile.workHistory', value: updated }));
    setNewWorkHistory({ title: '', company: '', description: '', startDate: '', endDate: '' });
  };

  const handleRemoveWork = (index) => {
    const updated = user.freelancerProfile.workHistory.filter((_, i) => i !== index);
    dispatch(updateUserField({ path: 'freelancerProfile.workHistory', value: updated }));
  };

  const handleAddEducation = () => {
    if (!newEducation.degree || !newEducation.institution) return;
    const updated = [...user.freelancerProfile.education, newEducation];
    dispatch(updateUserField({ path: 'freelancerProfile.education', value: updated }));
    setNewEducation({ degree: '', institution: '', startDate: '', endDate: '' });
  };

  const handleRemoveEducation = (index) => {
    const updated = user.freelancerProfile.education.filter((_, i) => i !== index);
    dispatch(updateUserField({ path: 'freelancerProfile.education', value: updated }));
  };


  return (


    <div className='text-4xl m-20 border-[rgb(103,103,103,1)] border-2 border-solid  rounded-3xl'>
      <div className='text-4xl flex items-center justify-between p-16'>
        <button
          onClick={() => {
            setIsEditing(true);
            setShowBillingInfo(false);
          }}
          className="text-blue-600 px-8 py-4 hover:underline"
        >
          Edit
        </button>
      </div>
      <div className='p-16 flex items-center gap-x-20 gap-y-10'>
        <div>
          <svg className='size-56' xmlns="http://www.w3.org/2000/svg" fill="none" aria-hidden="true" viewBox="0 0 24 24" role="img"><path vectorEffect="non-scaling-stroke" stroke="var(--icon-color, #001e00)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.5" d="M12 21a9 9 0 100-18 9 9 0 000 18z"></path><path vectorEffect="non-scaling-stroke" stroke="var(--icon-color, #001e00)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.5" d="M12 11.73a2.97 2.97 0 100-5.94 2.97 2.97 0 000 5.94zm0 1.89c-2.88 0-5.31 2.34-5.31 5.31v.36C8.22 20.37 10.02 21 12 21c1.98 0 3.78-.63 5.31-1.71v-.36c0-2.88-2.43-5.31-5.31-5.31z"></path></svg>
        </div>
        <div className='flex flex-col items-start gap-5'>
          <h2 className='font-semibold text-6xl'>{user.name}</h2>
          <div className='flex items-center gap-3'>
            <svg className='size-16' xmlns="http://www.w3.org/2000/svg" fill="none" ariaahidden="true" viewBox="0 0 24 24" role="img"><path vectorEffect="non-scaling-stroke" stroke="var(--icon-color, #001e00)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.5" d="M12 11.9a2.5 2.5 0 100-5 2.5 2.5 0 000 5z"></path><path vectorEffect="non-scaling-stroke" stroke="var(--icon-color, #001e00)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.5" d="M18.4 9.4C18.4 5.9 15.6 3 12 3 8.4 3 5.6 5.9 5.6 9.4c0 1.5.6 2.9 1.5 4.1 1.3 1.8 5 7.5 5 7.5s3.6-5.7 5-7.5c.7-1.2 1.3-2.5 1.3-4.1z"></path></svg>
            <p>{user.location}</p>
          </div>
        </div>
      </div>
      <hr className='text-[rgb(103,103,103,1)] opacity-100' />
      <div className='p-16'>

        <div className='font-semibold text-5xl flex items-center justify-between my-6'>
          {isEditing ?
            (
              <>
                <input
                  type="text"
                  value={editedTitle}
                  onChange={(e) => setEditedTitle(e.target.value)}
                  className="text-5xl font-semibold border px-4 py-2 rounded w-2/3"
                />
                <input
                  type="number"
                  value={editedRate}
                  onChange={(e) => setEditedRate(e.target.value)}
                  className="text-4xl font-semibold border px-4 py-2 rounded w-1/3 text-right"
                />
              </>
            ) :
            (
              <>
                <h4>{user.freelancerProfile.title}</h4>
                <h5>${user.freelancerProfile.hourlyRate}/hr</h5>
              </>
            )}
        </div>
        <div>
          {isEditing ?
            (
              <textarea
                value={editedBio}
                onChange={(e) => setEditedBio(e.target.value)}
                rows={5}
                className="text-[#676767] border w-full p-4 rounded"
              />
            ) :
            (
              <>
                <p className={`text-[#676767] leading-relaxed ${isExpanded ? '' : 'line-clamp-4'}`}>
                  {user.freelancerProfile.bio}
                </p>
                {isLong && (
                  <button
                    onClick={toggleExpanded}
                    className="text-primary underline mt-2"
                  >
                    {isExpanded ? 'less' : 'more'}
                  </button>
                )}
              </>
            )}
        </div>
      </div>
      <hr />
      <div className='p-16'>
        <div className='border-2 border-solid border-[#d9d9d9] px-20 py-16 my-12 rounded-3xl'>
          <h3 className='text-5xl font-semibold'>Balance: ${user.balance}</h3>
        </div>
        {
          showBillingInfo ?
            (
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
                          {showCard ? <BiHide className='size-12 text-[#676767]' /> : <BiShow className='size-12 text-[#676767]' />}
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
            ) :
            (
              <div className='border-2 border-solid border-[#d9d9d9] px-20 py-16 my-12 rounded-3xl'>
                <form>
                  <h2 className="text-5xl font-semibold mb-6">Add Billing Method</h2>
                  <label className="block mb-6">
                    Full Name
                    <input
                      type="text"
                      name="name"
                      value={user.billingInfo.holderName}
                      onChange={(e) => {
                        e.preventDefault();
                        dispatch(updateUserField({
                          path: 'billingInfo.holderName',
                          value: e.target.value
                        }));
                      }}
                      className="w-full border px-5 py-4 rounded mt-4"
                      required
                    />
                  </label>

                  <label className="block mb-6">
                    Card Number
                    <input
                      type="text"
                      name="cardNumber"
                      value={user.billingInfo.cardNumber}
                      onChange={(e) => {
                        e.preventDefault();
                        dispatch(updateUserField({
                          path: 'billingInfo.cardNumber',
                          value: e.target.value
                        }));
                      }}
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
                        value={user.billingInfo.expiryDate}
                        onChange={(e) => {
                          e.preventDefault();
                          dispatch(updateUserField({
                            path: 'billingInfo.expiryDate',
                            value: e.target.value
                          }));
                        }}
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
                        value={user.billingInfo.cvc}
                        onChange={(e) => {
                          e.preventDefault();
                          dispatch(updateUserField({
                            path: 'billingInfo.cvc',
                            value: e.target.value
                          }));
                        }}
                        maxLength="4"
                        className="w-full border px-5 py-4 rounded mt-4"
                        required
                      />
                    </label>
                    <label className="block mb-6">
                      Billing Address
                      <input
                        type="text"
                        name="billingAddress"
                        value={user.billingInfo.billingAddress}
                        onChange={(e) => {
                          e.preventDefault();
                          dispatch(updateUserField({
                            path: 'billingInfo.billingAddress',
                            value: e.target.value
                          }));
                        }}
                        className="w-full border px-5 py-4 rounded mt-4"
                        required
                      />
                    </label>

                    <button onClick={handleSubmit} className="bg-blue-600 text-white px-8 py-5 rounded hover:bg-blue-700">
                      Save Billing Method
                    </button>
                  </div>

                </form>
              </div>
            )
        }
      </div>
      <hr className='text-[rgb(103,103,103,1)] opacity-100' />
      <div className='p-16'>
        <h4 className='font-semibold text-5xl'>Work History</h4>

        {isEditing ? (
          <div>
            {user.freelancerProfile.workHistory.map((work, index) => (
              <div key={index} className="mb-10 border p-5 rounded">
                <div className="flex justify-between">
                  <h5 className="font-semibold text-3xl">Job #{index + 1}</h5>
                  <button onClick={() => handleRemoveWork(index)} className="text-red-500">Remove</button>
                </div>
                <input
                  type="text"
                  value={work.title}
                  onChange={(e) =>
                    dispatch(updateUserField({ path: `freelancerProfile.workHistory[${index}].title`, value: e.target.value }))
                  }
                  className="w-full border px-4 py-3 rounded mb-4"
                  placeholder="Job Title"
                />
                <input
                  type="text"
                  value={work.company}
                  onChange={(e) =>
                    dispatch(updateUserField({ path: `freelancerProfile.workHistory[${index}].company`, value: e.target.value }))
                  }
                  className="w-full border px-4 py-3 rounded mb-4"
                  placeholder="Company"
                />
                <textarea
                  value={work.description}
                  onChange={(e) =>
                    dispatch(updateUserField({ path: `freelancerProfile.workHistory[${index}].description`, value: e.target.value }))
                  }
                  className="w-full border px-4 py-3 rounded mb-4"
                  placeholder="Job Description"
                />
                <div className="flex gap-4">
                  <input
                    type="date"
                    value={new Date(work.startDate?.$date || work.startDate).toISOString().split("T")[0]}
                    onChange={(e) =>
                      dispatch(updateUserField({ path: `freelancerProfile.workHistory[${index}].startDate`, value: e.target.value }))
                    }
                    className="border px-4 py-3 rounded"
                  />
                  <input
                    type="date"
                    value={new Date(work.endDate?.$date || work.endDate).toISOString().split("T")[0]}
                    onChange={(e) =>
                      dispatch(updateUserField({ path: `freelancerProfile.workHistory[${index}].endDate`, value: e.target.value }))
                    }
                    className="border px-4 py-3 rounded"
                  />
                </div>
              </div>
            ))}

            <div className="mt-12 border-t pt-8">
              <h5 className='text-3xl font-semibold mb-4'>Add New Experience</h5>
              <input
                type="text"
                placeholder="Job Title"
                value={newWorkHistory.title}
                onChange={(e) => setNewWorkHistory({ ...newWorkHistory, title: e.target.value })}
                className="w-full border px-4 py-3 rounded mb-4"
              />
              <input
                type="text"
                placeholder="Company"
                value={newWorkHistory.company}
                onChange={(e) => setNewWorkHistory({ ...newWorkHistory, company: e.target.value })}
                className="w-full border px-4 py-3 rounded mb-4"
              />
              <textarea
                placeholder="Description"
                value={newWorkHistory.description}
                onChange={(e) => setNewWorkHistory({ ...newWorkHistory, description: e.target.value })}
                className="w-full border px-4 py-3 rounded mb-4"
              />
              <div className="flex gap-4 mb-4">
                <input
                  type="date"
                  value={newWorkHistory.startDate}
                  onChange={(e) => setNewWorkHistory({ ...newWorkHistory, startDate: e.target.value })}
                  className="border px-4 py-3 rounded"
                />
                <input
                  type="date"
                  value={newWorkHistory.endDate}
                  onChange={(e) => setNewWorkHistory({ ...newWorkHistory, endDate: e.target.value })}
                  className="border px-4 py-3 rounded"
                />
              </div>
              <button onClick={handleAddWorkHistory} className="bg-green-600 text-white px-6 py-3 rounded hover:bg-green-700">
                Add Work Experience
              </button>
            </div>
          </div>
        ) : (
          <div>
            {user.freelancerProfile.workHistory.length > 0 ? (
              <ul className='mt-7'>
                {user.freelancerProfile.workHistory.map((work, index) => (
                  <li key={index} className='my-5'>
                    <div className='font-semibold flex items-center justify-between bg-primary hover:bg-primaryHover text-white my-3 px-10 rounded-xl'>
                      <h5 className='font-bold my-6'>{work.title}</h5>
                      <p>{new Date(work.startDate?.$date || work.startDate).toLocaleDateString()} - {new Date(work.endDate?.$date || work.endDate).toLocaleDateString()}</p>
                    </div>
                    <div className='flex items-center gap-7'>
                      <GoOrganization className='size-12' />
                      <p>{work.company}</p>
                    </div>
                    <p className='text-[#676767] my-3'>{work.description}</p>
                  </li>
                ))}
              </ul>
            ) : (
              <p className='text-[#676767]'>No item</p>
            )}
          </div>
        )}
      </div>
      <hr />
      {isEditing ? (
        <div className="mt-7">
          <h4 className="m-8 ml-14 font-semibold text-5xl">Skills</h4>
          <div className="flex flex-wrap gap-4 mt-4">
            {user.freelancerProfile.skills.map((skill, index) => (
              <div key={index} className="m-8 ml-14 flex items-center gap-2">
                <input
                  type="text"
                  value={skill}
                  onChange={(e) =>
                    dispatch(updateUserField({
                      path: `freelancerProfile.skills[${index}]`,
                      value: e.target.value
                    }))
                  }
                  className="border px-4 py-2 rounded"
                  placeholder="Skill"
                />
                <button
                  type="button"
                  onClick={() => {
                    const newSkills = [...user.freelancerProfile.skills];
                    newSkills.splice(index, 1);
                    dispatch(updateUserField({
                      path: 'freelancerProfile.skills',
                      value: newSkills
                    }));
                  }}
                  className="text-red-500 text-xl font-bold hover:text-red-700"
                  title="Remove skill"
                >
                  −
                </button>
              </div>
            ))}
          </div>
          <button
            type="button"
            onClick={() => {
              const newSkills = [...user.freelancerProfile.skills, ""];
              dispatch(updateUserField({
                path: 'freelancerProfile.skills',
                value: newSkills
              }));
            }}
            className="m-8 ml-14 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            + Add Skill
          </button>
        </div>
      ) : (
        <div className='p-16'>
          <h4 className='font-semibold text-5xl'>Skills</h4>
          <div className='my-6'>
            <ul className="flex gap-4 items-center overflow-x-auto scroll-smooth no-scrollbar mt-7">
              {user.freelancerProfile.skills.map((skill) => (
                <li key={skill} className="bg-[#d9d9d9] px-6 py-3 rounded-full whitespace-nowrap shrink-0">
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )
      }

      <hr />
      <div className='p-16'>
        <h4 className='font-semibold text-5xl'>Education</h4>
        {isEditing ? (
          <div>
            {user.freelancerProfile.education.map((edu, index) => (
              <div key={index} className="mb-10 border p-5 rounded">
                <div className="flex justify-between">
                  <h5 className="font-semibold text-3xl">Education #{index + 1}</h5>
                  <button onClick={() => handleRemoveEducation(index)} className="text-red-500">Remove</button>
                </div>
                <input
                  type="text"
                  value={edu.degree}
                  onChange={(e) => dispatch(updateUserField({ path: `freelancerProfile.education[${index}].degree`, value: e.target.value }))}
                  className="w-full border px-4 py-3 rounded mb-4"
                  placeholder="Degree"
                />
                <input
                  type="text"
                  value={edu.institution}
                  onChange={(e) => dispatch(updateUserField({ path: `freelancerProfile.education[${index}].institution`, value: e.target.value }))}
                  className="w-full border px-4 py-3 rounded mb-4"
                  placeholder="Institution"
                />
                <div className="flex gap-4">
                  <input
                    type="date"
                    value={edu.startDate ? new Date(edu.startDate?.$date || edu.startDate).toISOString().split("T")[0] : ""}
                    onChange={(e) => dispatch(updateUserField({ path: `freelancerProfile.education[${index}].startDate`, value: e.target.value }))}
                    className="border px-4 py-3 rounded"
                  />
                  <input
                    type="date"
                    value={edu.endDate ? new Date(edu.endDate?.$date || edu.endDate).toISOString().split("T")[0] : ""}
                    onChange={(e) => dispatch(updateUserField({ path: `freelancerProfile.education[${index}].endDate`, value: e.target.value }))}
                    className="border px-4 py-3 rounded"
                  />
                </div>
              </div>
            ))}

            <div className="mt-12 border-t pt-8">
              <h5 className='text-3xl font-semibold mb-4'>Add New Education</h5>
              <input
                type="text"
                placeholder="Degree"
                value={newEducation.degree}
                onChange={(e) => setNewEducation({ ...newEducation, degree: e.target.value })}
                className="w-full border px-4 py-3 rounded mb-4"
              />
              <input
                type="text"
                placeholder="Institution"
                value={newEducation.institution}
                onChange={(e) => setNewEducation({ ...newEducation, institution: e.target.value })}
                className="w-full border px-4 py-3 rounded mb-4"
              />
              <div className="flex gap-4 mb-4">
                <input
                  type="date"
                  value={newEducation.startDate}
                  onChange={(e) => setNewEducation({ ...newEducation, startDate: e.target.value })}
                  className="border px-4 py-3 rounded"
                />
                <input
                  type="date"
                  value={newEducation.endDate}
                  onChange={(e) => setNewEducation({ ...newEducation, endDate: e.target.value })}
                  className="border px-4 py-3 rounded"
                />
              </div>
              <button onClick={handleAddEducation} className="bg-green-600 text-white px-6 py-3 rounded hover:bg-green-700">
                Add Education
              </button>
            </div>
          </div>
        ) : (
          <div>
            {user.freelancerProfile.education.length > 0 ? (
              <ul className='mt-7'>
                {user.freelancerProfile.education.map((school, index) => (
                  <li key={index} className='my-5'>
                    <div className='font-semibold flex items-center justify-between bg-primary hover:bg-primaryHover text-white my-3 px-10 rounded-xl'>
                      <h5 className='font-bold my-6'>{school.degree}</h5>
                      <p>{new Date(school.startDate?.$date || school.startDate).toLocaleDateString()} - {new Date(school.endDate?.$date || school.endDate).toLocaleDateString()}</p>
                    </div>
                    <div className='flex items-center gap-7 '>
                      <GoOrganization className='size-12' />
                      <p>{school.institution}</p>
                    </div>
                  </li>
                ))}
              </ul>
            ) : (
              <p className='text-[#676767]'>No item</p>
            )}
          </div>
        )}

      </div>
      <hr />
      <div className='p-16'>
        <h4 className='font-semibold text-5xl'>Languages</h4>
        {isEditing ? (
          <div className="flex flex-col gap-4 mt-7">
            {user.freelancerProfile.languages.map((lang, index) => (
              <div key={index} className="flex items-center gap-2">
                <input
                  type="text"
                  value={lang.name}
                  onChange={(e) =>
                    dispatch(updateUserField({
                      path: `freelancerProfile.languages[${index}].name`,
                      value: e.target.value
                    }))
                  }
                  className="border px-4 py-2 rounded"
                  placeholder="Language"
                />
                <b>:</b>
                <input
                  type="text"
                  value={lang.proficiency}
                  onChange={(e) =>
                    dispatch(updateUserField({
                      path: `freelancerProfile.languages[${index}].proficiency`,
                      value: e.target.value
                    }))
                  }
                  className="border px-4 py-2 rounded"
                  placeholder="Proficiency"
                />
                <button
                  type="button"
                  onClick={() => {
                    const updated = [...user.freelancerProfile.languages];
                    updated.splice(index, 1);
                    dispatch(updateUserField({
                      path: 'freelancerProfile.languages',
                      value: updated
                    }));
                  }}
                  className="text-red-500 text-xl font-bold hover:text-red-700"
                  title="Remove language"
                >
                  −
                </button>
              </div>
            ))}
            <button
              type="button"
              onClick={() => {
                const updated = [...user.freelancerProfile.languages, { name: "", proficiency: "" }];
                dispatch(updateUserField({
                  path: 'freelancerProfile.languages',
                  value: updated
                }));
              }}
              className="mt-2 w-fit bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
              + Add Language
            </button>
          </div>
        ) : (
          <div>
            {user.freelancerProfile.languages.length > 0 ? (
              <ul className='mt-7'>
                {user.freelancerProfile.languages.map((language, index) => (
                  <li key={index} className='my-2'>
                    <div className='font-semibold flex items-center justify-between'>
                      <h5 className='font-bold my-4'>{language.name}</h5>
                      <p>{language.proficiency}</p>
                    </div>
                  </li>
                ))}
              </ul>
            ) : (
              <p className='text-[#676767]'>No item</p>
            )}
          </div>
        )}
      </div>

      <hr />
      <div className='p-16'>
        <h4 className='font-semibold text-5xl'>Your project catalog</h4>
        <div>
          {
            user.freelancerProfile.projectsCatalog.length > 0 ?
              (
                <ul className='mt-7'>
                  {user.freelancerProfile.projectsCatalog.map((project, index) => {
                    return (<li key={index} className='my-2 border-2 border-black border-solid p-8'>
                      <div className='font-semibold flex flex-col items-start'>
                        <h5 className='font-bold my-2'>{project.title}</h5>
                        <br />
                        <p>{project.description}</p>
                        <br />
                        <div>
                          <ul className="flex gap-x-4  items-center overflow-x-auto scroll-smooth no-scrollbar mt-2">
                            {project.technologies.map((skill) => (
                              <li key={skill} className="bg-[#d9d9d9] px-6 py-2 rounded-full whitespace-nowrap shrink-0">
                                {skill}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </li>)
                  })}
                </ul>
              ) :
              (<p className='text-[#676767]'>No item</p>)
          }
        </div>
        <div className="mt-4">
          {isEditing ?
            (
              <button
                onClick={handleSave}
                className="bg-blue-600 text-white px-8 py-4 rounded hover:bg-blue-700"
              >
                Save
              </button>
            ) :
            (
              <></>
            )}
        </div>

      </div>
    </div >
  )
}

export default FreelancerProfile