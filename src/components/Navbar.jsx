import React from 'react'
import { lrlogo } from '../assets';
import { Link } from 'react-router-dom';

const navLinks = [
    {href: "/account", title: "Account"},
]



const Navbar = () => {
  return (
    <div className='bg-[rgba(0,0,0,0.48)] flex justify-between w-full h-20 fixed items-center z-10 navbar p-2 '>
      <Link to={'/menu'}>
        <img src={lrlogo} alt="" className='cursor-pointer p-3 w-52 h-12 md:h-full md:w-80' onClick={() => window.scrollTo(0,0)} />

      </Link>
        <div className='flex items-center text-center justify-center'>
            
            <Link to={"/account"} className='md:text-5xl text-2xl md:mr-20  p-3 text-[#FF851B] hover:bg-[#ff851b31] transition-all rounded-2xl'>Account</Link>

        </div>
    </div>
  )
}

export default Navbar