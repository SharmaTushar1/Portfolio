import React from 'react'

const Navbar = () => {
  return (
    <div id='nav' className='flex absolute w-screen text-white px-24 justify-between'>
      <div>
        <a href="" className='flex flex-row'>
          <img src="favicon.ico" alt="" />
          <span>Tushar Sharma</span>
        </a>
      </div>
      <div>
        <ul className='flex'>
          <li><a href="/home">Home</a></li>
          <li><a href="/blogs">Blogs</a></li>
          {/* <li><a href="">Goals</a></li> */}
          <li><a href="/cool-stuf">Cool stuff</a></li>
          <li><a href="">Socials</a></li> 
          {/* Socials will have a dropdown for social pages + a drop down to drop a message where they can */}
          <li><a href="">Contact Me</a></li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar