import React from 'react'
import { lrlogo } from '../assets';
import { Link } from 'react-router-dom';

const navLinks = [
    {href: "/account", title: "Account"},
]



const Navbar = () => {
  return (
    <div className='flex justify-between w-full h-20 fixed items-center z-10 bg-[rgba(13,18,29,0.96)] p-2 '>
      <Link to={'/'}>
        <img src={lrlogo} alt="" className='cursor-pointer p-3 w-52 h-12 md:h-full md:w-80' onClick={() => window.scrollTo(0,0)} />

      </Link>
        <div className='flex items-center text-center justify-center'>
            <div className='flex flex-row mr-10 h-full items-center'>
              <div className='w-80 border-[3px] border-[#FF851B] mr-3 rounded-full h-10 lg:block hidden'></div>
              <p className='text-[#FF851B] text-5xl lg:block hidden'>1</p>
            </div>
            <Link className='md:text-5xl text-2xl md:mr-20  p-3  text-[#FF851B] hover:bg-[#ff851b31] transition-all rounded-2xl'>Account</Link>

        </div>
    </div>
  )
}

export default Navbar