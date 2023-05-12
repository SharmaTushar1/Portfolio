import React from 'react'

const Hero = () => {

  const getMyAge = function():number {
    let today:Date = new Date();
    let birthDate:Date = new Date("2002/08/15");
    let age:number = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    return age;
  } 

  return (
    <div id='hero' className='w-full h-full flex items-center justify-center'>
      <div className='flex'>
        {/* img */}
        <div>
          <img src="./Portfolio profile pic.jpg" className='h-[200px] w-[150px]' alt="" />
        </div>
        {/* name and other details about me */}
        <div>
          <div>Tushar Sharma</div>
          <div>Software Engineer</div>
          <div>Age: {getMyAge()}</div>
        </div>
      </div>
    </div>
  )
}

export default Hero