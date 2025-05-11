
import React, { useState } from 'react'
import { MdAttachFile } from "react-icons/md";


function AdditionalDetails({coverletter,setCoverletter}) {
    const [file,setFile] = useState(null);

    function handleFileChange(e)
    {
        e.preventDefault();
        const selectedFile = e.target.files[0];
        setFile(selectedFile);
    }
    function handleCoverLetterChange(e)
    {
        e.preventDefault()
        setCoverletter(e.target.value.trim());
    }

  return (
    <div className='border-solid border-black border-2 my-10'>
        <div className='px-20 py-5 text-3xl'>
            <h2 className='text-5xl font-semibold my-12'>Additional details</h2>
            <label htmlFor="coverletter">Cover letter</label>
            <textarea onChange={handleCoverLetterChange} name="coverletter" id="coverletter" className='rounded-xl my-5 p-5 w-full h-96 border-2 border-solid border-black'></textarea>
            <p className='my-5'>Attachments</p>
            <p className='mb-12 text-2xl'>Add work samples to strengthen your proposal. Please remove any contact details, as sharing these before a contract is against our policy.</p>
            <label htmlFor="fileinput" className='text-primary border-solid border-primary border-2 p-3 rounded-lg'>
                <MdAttachFile className='inline-block m-2'/>
                <span className='m-2'>Attach file</span>
            </label>
            <input id='fileinput' type="file" onChange={handleFileChange} accept=".jpg, .jpeg, .png, .pdf" 
                className='hidden ' placeholder='Attach file'
            />
            <div className='text-2xl my-6'>
                {file ? (
                <p>Selected file: {file.name}</p>
                ) : (
                <p>No file selected</p>
                )}
            </div>
        </div>
    </div>
  )
}

export default AdditionalDetails