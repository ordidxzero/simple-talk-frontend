import React from 'react';
import HomeTemplate from '../components/home/HomeTemplate';
import LeftMenu from '../components/home/LeftMenu';
import RightContent from '../components/home/RightContent';

function HomePage() {
  return (
    <HomeTemplate>
      <LeftMenu />
      <RightContent />
    </HomeTemplate>
  );
}

export default HomePage;
