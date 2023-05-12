import React from 'react';
import Link from 'next/link';

const Navbar = () => {
  return (
    <div id='nav' className='flex w-screen text-white px-24 justify-between z-10 fixed'>
      <div>
        <a href="" className='flex flex-row items-center'>
          <img src="favicon.ico" alt="" />
          <span>Tushar Sharma</span>
        </a>
      </div>
      <div className='flex justify-center items-center'>
        <ul className='flex'>
          <li><Link href='#' className='active:font-bold'>Home</Link></li>
          <li><Link href='#' className='pl-10 active:font-bold'>Blogs</Link></li>
          {/* <li><a href="">Goals</a></li> */}
          <li><Link href="#" className='pl-10 active:font-bold'>Cool Stuff</Link></li>
          <li><Link href='#' className='pl-10 active:font-bold'>Socials</Link></li> 
          {/* Socials will have a dropdown for social pages + a drop down to drop a message where they can */}
          <li><Link href='/' className='pl-10 active:font-bold'>Contact Me</Link></li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar