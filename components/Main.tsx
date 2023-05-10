import React from 'react';
import Video from './Video';
import Head from 'next/head';

const Main = () => {
  return (
    <div>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <title>Tushar Sharma</title>
      </Head>
      <Video url="/aerial1.mp4" />
    </div>
  )
}

export default Main