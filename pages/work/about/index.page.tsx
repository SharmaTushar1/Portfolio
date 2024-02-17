import { useRouter } from 'next/router';
import React, { useEffect } from 'react';

const About = () => {
  const router = useRouter();
  useEffect(() => {
    router.push('/work/');
    localStorage.setItem('page', 'About');
  });
  return <></>;
};

export default About;
