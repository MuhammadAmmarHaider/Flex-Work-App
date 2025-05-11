import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom'

function Navbar() {
  const isAuthenticated = false;
    const user = useSelector((state) => state.user);

  return (
    <nav className="bg-white shadow-md py-8 px-10">
            {isAuthenticated ? (
        user.role === 'client' ? (      <div className="flex justify-between items-center">
          <div className="flex items-center space-x-11">
            <ul className="flex space-x-9 items-center">
              <li className="text-5xl font-bold text-black font-permanent-marker"><Link to='/'>Flex Work</Link></li>
              <li className="text-3xl hover:text-primaryHover"><Link to='/post-job'>Post Job</Link></li>
              <li className="text-3xl hover:text-primaryHover"><Link to='/client-proposals'>Proposals</Link></li>
              <li className="text-3xl hover:text-primaryHover"><Link to='/all-jobs'>All Jobs</Link></li>
              <li className="text-3xl hover:text-primaryHover"><Link to=''>Messages</Link></li>
            </ul>
          </div>
          <div className="flex space-x-11">
            <ul className="flex space-x-9 items-center">
              <li>
                <Link to='' className="text-3xl text-white bg-primary rounded-2xl px-8 py-5 hover:bg-primaryHover">Log out</Link>
              </li>
              <li>
                <Link to='/profile'>
                  <svg className='size-20' xmlns="http://www.w3.org/2000/svg" fill="none" aria-hidden="true" viewBox="0 0 24 24" role="img"><path vectorEffect="non-scaling-stroke" stroke="var(--icon-color, #001e00)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.5" d="M12 21a9 9 0 100-18 9 9 0 000 18z"></path><path vectorEffect="non-scaling-stroke" stroke="var(--icon-color, #001e00)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.5" d="M12 11.73a2.97 2.97 0 100-5.94 2.97 2.97 0 000 5.94zm0 1.89c-2.88 0-5.31 2.34-5.31 5.31v.36C8.22 20.37 10.02 21 12 21c1.98 0 3.78-.63 5.31-1.71v-.36c0-2.88-2.43-5.31-5.31-5.31z"></path></svg>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        ) : (
          <div className="flex justify-between items-center">
          <div className="flex items-center space-x-11">
            <ul className="flex space-x-9 items-center">
              <li className="text-5xl font-bold text-black font-permanent-marker"><Link to=''>Flex Work</Link></li>
              <li className="text-3xl hover:text-primaryHover"><Link to='/find-work'>Find Work</Link></li>
              <li className="text-3xl hover:text-primaryHover"><Link to='/saved-jobs'>Saved Jobs</Link></li>
              <li className="text-3xl hover:text-primaryHover"><Link to='/freelancer-proposals'>Proposals</Link></li>
              <li className="text-3xl hover:text-primaryHover"><Link to=''>Messages</Link></li>
            </ul>
          </div>
          <div className="flex space-x-11">
            <ul className="flex space-x-9 items-center">
              <li>
                <Link to='' className="text-3xl text-white bg-primary rounded-2xl px-8 py-5 hover:bg-primaryHover">Log out</Link>
              </li>
              <li>
                <Link to='/profile'>
                  <svg className='size-20' xmlns="http://www.w3.org/2000/svg" fill="none" aria-hidden="true" viewBox="0 0 24 24" role="img"><path vectorEffect="non-scaling-stroke" stroke="var(--icon-color, #001e00)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.5" d="M12 21a9 9 0 100-18 9 9 0 000 18z"></path><path vectorEffect="non-scaling-stroke" stroke="var(--icon-color, #001e00)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.5" d="M12 11.73a2.97 2.97 0 100-5.94 2.97 2.97 0 000 5.94zm0 1.89c-2.88 0-5.31 2.34-5.31 5.31v.36C8.22 20.37 10.02 21 12 21c1.98 0 3.78-.63 5.31-1.71v-.36c0-2.88-2.43-5.31-5.31-5.31z"></path></svg>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        )
      ) : (
        <div className="flex justify-between items-center">
        <div className="flex items-center space-x-11">
          <ul className="flex space-x-9 items-center">
            <li className="text-5xl font-bold text-black font-permanent-marker"><Link to=''>Flex Work</Link></li>
            <li className="text-3xl hover:text-primaryHover"><Link to='/find-talent'>Find talent</Link></li>
            <li className="text-3xl hover:text-primaryHover"><Link to='/find-work'>Find work</Link></li>
            <li className="text-3xl hover:text-primaryHover"><Link to='/why-flexwork'>Why Flexwork</Link></li>
            <li className="text-3xl hover:text-primaryHover"><Link to='/whatsnew'>What's new</Link></li>
            <li className="text-3xl hover:text-primaryHover"><Link to=''>Pricing</Link></li>
          </ul>
        </div>
        <div className="flex space-x-11">
          <ul className="flex space-x-9 items-center">
            <li>
              <Link to='/login' className="text-3xl hover:text-primaryHover">Log in</Link>
            </li>
            <li>
              <Link to='/signup' className="text-3xl text-white bg-primary rounded-2xl px-8 py-5 hover:bg-primaryHover">Sign up</Link>
            </li>
          </ul>
        </div>
      </div>
      )}
    </nav>
  )
}

export default Navbar
