import useStore from '@/store/store';
import { Carousel } from 'antd';
import { CarouselRef } from 'antd/es/carousel';
import React, { useEffect, useRef } from 'react';

const WorkDetails = () => {
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
    <div>
      <Carousel
        speed={1000}
        ref={(ref) => {
          slider.current = ref;
        }}
        dots={false}
        className="h-full text-black"
      >
        <div className="">1st page Details</div>
        <div className="relative">2nd page details</div>
        <div className="relative">3rd page details</div>
        <div className="relative">4th page details</div>
      </Carousel>
    </div>
  );
};

export default WorkDetails;
