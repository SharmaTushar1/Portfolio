import Image from 'next/image';
import { Suspense } from 'react';
// import VideoComponent from '../../../public/Beautiful Landscape Scenery.mp4';

export default function Background() {
  const BackgroundComponent = () => (
    <>
      <Suspense
        fallback={
          <div className="w-screen h-full absolute top-0 left-0 right-0 bg-red-900">
            Loading video...
          </div>
        }
      >
        {/* <div className='bg-black -z-10 w-screen h-screen'></div> */}
        <Image
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          alt="background-image"
          className="-z-10 flip-img"
          // src={'/Black Cloud Sunset.jpg'}
          src={'/Mountain.jpg'}
          // src={'/Sh.jpg'}
          // src={'/Silhouette Cyclists Photo.jpg'}
          // className="absolute top-0 left-0 right-0 w-screen h-full object-cover -z-10"
        />
      </Suspense>
    </>
  );

  return (
    <>
      <div className="bg-black/40 w-screen h-full -z-[9] absolute top-0 right-0 left-0"></div>
      <BackgroundComponent />
    </>
  );
}
