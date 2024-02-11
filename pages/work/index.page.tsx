import React from 'react';
import Background from './components/Background';
import WorkLayout from './layout';
import WorkNavbar from './components/WorkNavbar';

const WorkPortfolio = () => {
  return (
    <WorkLayout>
      <WorkNavbar />
      <Background />
    </WorkLayout>
  );
};

export default WorkPortfolio;
