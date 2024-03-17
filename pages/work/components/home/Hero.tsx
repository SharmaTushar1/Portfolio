import { Button, Divider, Flex } from 'antd';
import React from 'react';

const Hero = () => {
  return (
    <Flex className="text-white">
      <Divider type="vertical" className="h-36 top-2 bg-gray-200 relative" />
      <div className="ml-2">
        <div className="text-white text-6xl">Tushar Sharma</div>
        <div className="mt-2 ml-3">Software Engineer</div>
        <Button
          className="w-32 rounded-full mt-6 border-orange-400 text-white
        "
        >
          Contact
        </Button>
      </div>
    </Flex>
  );
};

export default Hero;
