import React from 'react'

type Props = {
  url: string;
}

const Video = ({url}: Props) => {
  return (
    <>
      <video
        loop
        autoPlay
        muted
        className='fixed right-0 bottom-0 min-w-full min-h-full -z-[2] object-cover'
      >
        <source src={url} type='video/mp4' />
      </video>
      <div className='absolute top-0 bottom-0 w-full h-full bg-[rgba(1,1,1,0.5)] -z-[1]'></div>
    </>
  )
}

export default Video