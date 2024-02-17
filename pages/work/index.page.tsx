import React, { useEffect } from 'react';
import WorkLayout from './layout';
import { useRouter } from 'next/router';
import routes from '@/lib/routes';
import Head from 'next/head';

const WorkPortfolio = () => {
  const router = useRouter();
  useEffect(() => {
    if (router.pathname.startsWith(routes.work.home)) {
      localStorage.setItem('page', 'Home');
    } else if (router.pathname.startsWith(routes.work.projects)) {
      localStorage.setItem('page', 'Projects');
    } else if (router.pathname.startsWith(routes.work.about)) {
      localStorage.setItem('page', 'About');
    } else if (router.pathname.startsWith(routes.work.socials)) {
      localStorage.setItem('page', 'Socials');
    } else {
      localStorage.setItem('page', 'Home');
    }
  }, []);
  return (
    <>
      <Head>
        <title>Tushar Sharma - Work</title>
      </Head>
      <WorkLayout> </WorkLayout>
    </>
  );
};

export default WorkPortfolio;
