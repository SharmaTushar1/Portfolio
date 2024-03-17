import Image from 'next/image';

export default function Background() {
  const BackgroundComponent = () => (
    <>
      <Image
        layout="fill"
        objectFit="cover"
        alt="background-image"
        className="-z-10 flip-img"
        src={'/Mountain.jpg'}
      />
    </>
  );

  return (
    <>
      <div className="bg-black/40 w-screen h-full -z-[9] absolute top-0 right-0 left-0"></div>
      <BackgroundComponent />
    </>
  );
}
