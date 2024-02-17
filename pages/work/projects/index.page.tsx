import React, { useEffect } from 'react';
import { useRouter } from 'next/router';

const Projects = () => {
  const router = useRouter();
  useEffect(() => {
    router.push('/work/');
    localStorage.setItem('page', 'Projects');
  });
  return <></>;
};

export default Projects;
