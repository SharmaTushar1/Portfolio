import React, { useEffect, useRef } from 'react';
import WorkHome from './home/WorkHome';
import useStore from '@/store/store';
import { Carousel, Flex } from 'antd';
import { CarouselRef } from 'antd/es/carousel';

const WorkMain = () => {
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
    <Flex className="pl-4">
      <Carousel
        speed={1000}
        ref={(ref) => {
          slider.current = ref;
        }}
        dots={false}
        vertical
        className="h-full mt-32 text-white"
      >
        <div className="">{page === 'Home' && <WorkHome />}</div>
        <div className="relative">Projects</div>
        <div className="relative">About</div>
        <div className="relative">Socials</div>
      </Carousel>
    </Flex>
  );
};

export default WorkMain;
