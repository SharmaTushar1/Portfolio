import { Carousel, Flex } from 'antd';
import React, { useEffect, useRef } from 'react';
import MusicPlayer from './MusicPlayer';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import { useRouter } from 'next/router';
import useStore from '@/store/store';
import { CarouselRef } from 'antd/es/carousel';

const WorkSidebar = () => {
  const router = useRouter();
  const { page } = useStore();

  const slider = useRef<CarouselRef | null>();

  useEffect(() => {
    if (page === 'Home') {
      slider.current?.goTo(0);
    } else if (page === 'Projects') {
      slider.current?.goTo(1);
    } else if (page === 'About') {
      slider.current?.goTo(2);
    } else if (page === 'Socials') {
      slider.current?.goTo(3);
    }
  }, [page]);

  return (
    <>
      <Flex
        vertical
        className="bg-red-900/5 hover:bg-black/10 text-white h-full w-40 z-10 fixed"
        justify="space-between"
      >
        <Flex vertical className="w-40">
          <Carousel
            speed={1000}
            ref={(ref) => {
              slider.current = ref;
            }}
            dots={false}
            className="text-3xl top-28 text-right text-white"
          >
            <div className="-rotate-90 relative top-16">Home</div>
            <div className="relative top-16 -rotate-90">Projects</div>
            <div className="relative top-16 -rotate-90">About</div>
            <div className="relative top-16 -rotate-90">Socials</div>
          </Carousel>
          <div
            className="text-center w-full cursor-pointer mt-60"
            onClick={() => router.back()}
          >
            <KeyboardBackspaceIcon className="text-6xl" />
          </div>
        </Flex>
        <Flex
          align="end"
          className="text-xs relative bottom-2"
          justify="center"
        >
          <MusicPlayer />© {new Date().getFullYear()} Tushar Sharma
        </Flex>
      </Flex>
    </>
  );
};

export default WorkSidebar;
