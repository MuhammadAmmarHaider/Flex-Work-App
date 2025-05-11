import React from 'react'
import { Link } from 'react-router-dom'
import { FaFacebook } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io5";
import { FaXTwitter } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io";
import { FaInstagram } from "react-icons/fa";
import { FaApple } from "react-icons/fa";
import { IoLogoAndroid } from "react-icons/io";

function Footer() {
  return (
    <footer className="bg-black text-white shadow-md">
      <div className="flex justify-between items-center p-16">
        <div className="flex items-center space-x-11">
          <ul className="flex space-x-9 items-center">
            <li className="text-4xl font-bold">Follow us</li>
            <li className="text-3xl"><Link to=''><IoLogoLinkedin className='size-12'/></Link></li>
            <li className="text-3xl"><Link to=''><FaFacebook className='size-12'/></Link></li>
            <li className="text-3xl"><Link to=''><FaXTwitter className='size-12'/></Link></li>
            <li className="text-3xl"><Link to=''><IoLogoYoutube className='size-12'/></Link></li>
            <li className="text-3xl"><Link to=''><FaInstagram className='size-12'/></Link></li>
          </ul>
        </div>
        <div className="flex space-x-11">
          <ul className="flex space-x-9 items-center">
            <li className="text-4xl font-bold">
              Mobile app
            </li>
            <li>
                <FaApple className='size-12'/>
            </li>
            <li>
                <IoLogoAndroid className='size-12'/>
            </li>
          </ul>
        </div>
      </div>
      <hr className='mx-16'/>
      <div className="flex items-center space-x-11 p-16">
          <ul className="flex space-x-9 items-center text-3xl ">
            <li>© 2015 FlexWork® Global Inc.</li>
            <li className='hover:underline'><Link to=''>Terms of Service</Link></li>
            <li className='hover:underline'><Link to=''>Privacy Policy</Link></li>
            <li className='hover:underline'><Link to=''>CA Notice at Collection</Link></li>
            <li className='hover:underline'><Link to=''>Cookie Settings</Link></li>
            <li className='hover:underline'><Link to=''>Accessibility</Link></li>
          </ul>
        </div>
    </footer>
  )
}

export default Footer


