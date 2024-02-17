import { useRouter } from 'next/router';
import React, { useEffect } from 'react';

const Socials = () => {
  const router = useRouter();
  useEffect(() => {
    router.push('/work/');
    localStorage.setItem('page', 'Socials');
  });
  return <></>;
};

export default Socials;
