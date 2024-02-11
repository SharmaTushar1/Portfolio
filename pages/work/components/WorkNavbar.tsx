import useStore from '@/store/store';
import { Flex } from 'antd';
import Link from 'next/link';
import React from 'react';

const WorkNavbar = () => {
  const { page, changePage } = useStore();
  const handlePageChange = (page: string) => {
    changePage(page);
  };
  return (
    <nav className="w-fit mx-auto p-8 text-white z-10">
      <Flex justify="end" className="ml-12">
        <Link
          href={'#'}
          className={`mr-16 ${page === 'Home' && ' border-b-2 border-solid border-white'}`}
          onClick={() => handlePageChange('Home')}
        >
          Home
        </Link>
        <Link
          href={'#'}
          className={`mr-16 ${page === 'Projects' && ' border-b-2 border-solid border-white'}`}
          onClick={() => handlePageChange('Projects')}
        >
          Projects
        </Link>
        <Link
          href={'#'}
          className={`mr-16 ${page === 'About' && ' border-b-2 border-solid border-white'}`}
          onClick={() => handlePageChange('About')}
        >
          About
        </Link>
        <Link
          href={'#'}
          className={`${page === 'Socials' && ' border-b-2 border-solid border-white'}`}
          onClick={() => handlePageChange('Socials')}
        >
          Socials
        </Link>
      </Flex>
    </nav>
  );
};

export default WorkNavbar;
