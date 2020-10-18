import React from 'react';
import HomeTemplate from '../home/components/HomeTemplate';
import LeftMenu from '../home/components/LeftMenu';
import RightContent from '../home/components/RightContent';

function HomePage() {
  return (
    <HomeTemplate>
      <LeftMenu />
      <RightContent />
    </HomeTemplate>
  );
}

export default HomePage;
