import React, { useEffect, useState } from 'react';
import Video from './Video';
import Head from 'next/head';
import {Poppins} from 'next/font/google';
import Navbar from './Navbar';
import Hero from './Hero';

const poppinsBold = Poppins({
  weight: '800',
  subsets: ['latin']
});

const poppinsNormal = Poppins({
  weight: '400',
  subsets: ['latin']
});

const Main = () => {

  const [animation, setAnimation] = useState(true); // initially I'll show animation and after that set it to false and load main


  useEffect(() => {
    const hi = document.getElementById('hi');
    const me = document.getElementById('me');
    const greetings = document.getElementById('greetings');
    const intro = document.getElementById('intro');
    const actualContent = document.getElementById('actual-content');

    // initially hide the greetings and my name

    me?.classList.add('hidden');
    greetings?.classList.add('hidden');
    actualContent?.classList.add('hidden');

    setTimeout(() => {
      me?.classList.remove('hidden'); // unhide my name
    }, 4000);

    setTimeout(() => {
      greetings?.classList.remove('hidden'); // unhide greetings
    }, 10000)

    setTimeout(() => {
      intro?.classList.add('hidden'); // hide intro
      actualContent?.classList.remove('hidden');
      setAnimation(false);

    }, 16000);

  }, [])


  return (
    <div>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <title>Tushar Sharma</title>
      </Head>
      <Video url="/aerial1.mp4" />
      <div className='absolute top-0 bottom-0 w-full h-full bg-[rgba(1,1,1,0.5)] -z-[1]'></div>

      {!animation && <Navbar />}

      <div className={`w-screen h-screen flex items-center ${poppinsNormal.className}`}>
        {/* Intro container */}
        <div id='intro' className='text-white w-fit m-auto flex flex-col'>
          <div id='hi' className='text-9xl'>Hi,</div>
          <div id='me' className='text-7xl absolute'>I'm Tushar Sharma</div>
          <div id='greetings' className='text-7xl relative bottom-4'>Thanks for visiting!!</div>
        </div>
        {/* Actual about me container */}
        {!animation && <Hero />}
      </div>

      {/* Only load the remaining content when the animation has finished. */}

      {!animation && <>
        
      </>}

    </div>
  )
}

export default Main