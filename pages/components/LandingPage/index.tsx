import { Flex } from 'antd';
import Link from 'next/link';
import React from 'react';

const LandingPage = () => {
  return (
    <Flex>
      <Link href={'/work'} className="bg-black text-white">
        <div>Pick</div>
        <div>Work</div>
      </Link>
      <Link href={'/personal'} className="bg-white text-black">
        <div>One</div>
        <div>Personal</div>
      </Link>
    </Flex>
  );
};

export default LandingPage;
