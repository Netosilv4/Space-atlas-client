import React, { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import Sidebar from '../sidebar';
import HeaderDiv from './styles';

const Header = () => {
  const [showSideBar, setSideBar] = useState(false);
  return (
    <HeaderDiv>
      <Sidebar showSideBar={showSideBar} setSideBar={setSideBar} />
      <GiHamburgerMenu color="white" size="25px" onClick={() => setSideBar(true)} className="hamburguer-menu" />
    </HeaderDiv>

  );
};

export default Header;
