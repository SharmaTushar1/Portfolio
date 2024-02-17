import useStore from '@/store/store';
import { Flex } from 'antd';
import React from 'react';

const WorkNavbar = () => {
  const { page, changePage } = useStore();
  const handlePageChange = (page: string) => {
    changePage(page);
  };
  return (
    <nav className="w-fit mx-auto p-8 text-white z-10">
      <Flex justify="end" className="ml-12">
        <div
          className={`cursor-pointer mr-16 ${page === 'Home' && ' border-b-2 border-solid border-white'}`}
          onClick={() => handlePageChange('Home')}
        >
          Home
        </div>
        <div
          className={`cursor-pointer mr-16 ${page === 'Projects' && ' border-b-2 border-solid border-white'}`}
          onClick={() => handlePageChange('Projects')}
        >
          Projects
        </div>
        <div
          className={`cursor-pointer mr-16 ${page === 'About' && ' border-b-2 border-solid border-white'}`}
          onClick={() => handlePageChange('About')}
        >
          About
        </div>
        <div
          className={`cursor-pointer ${page === 'Socials' && ' border-b-2 border-solid border-white'}`}
          onClick={() => handlePageChange('Socials')}
        >
          Socials
        </div>
      </Flex>
    </nav>
  );
};

export default WorkNavbar;
