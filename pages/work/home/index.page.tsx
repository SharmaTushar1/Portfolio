import React, { useEffect } from 'react';
import { useRouter } from 'next/router';

const Home = () => {
  const router = useRouter();
  useEffect(() => {
    router.push('/work/');
    localStorage.setItem('page', 'Home');
  });
  return <></>;
};

export default Home;
