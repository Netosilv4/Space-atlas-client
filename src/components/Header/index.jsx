import React, { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import PropTypes from 'prop-types';
import Sidebar from '../sidebar';
import HeaderDiv from './styles';

const Header = ({ history }) => {
  const [showSideBar, setSideBar] = useState(false);
  return (
    <HeaderDiv>
      <Sidebar history={history} showSideBar={showSideBar} setSideBar={setSideBar} />
      <GiHamburgerMenu color="white" size="25px" onClick={() => setSideBar(true)} className="hamburguer-menu" />
    </HeaderDiv>

  );
};

Header.propTypes = {
  history: PropTypes.objectOf(String).isRequired,
};

export default Header;
