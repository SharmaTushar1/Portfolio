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
    </>
  )
}

export default Video