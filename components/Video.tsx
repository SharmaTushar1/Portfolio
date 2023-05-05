import React from 'react'

type Props = {
  url: string;
}

const Video = ({url}: Props) => {
  return (
    <video
      loop
      autoPlay
      muted
    >
      <source src={url} type='video/mp4' />
    </video>
  )
}

export default Video