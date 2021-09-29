import React, { useContext } from 'react';

import {
  MdNotificationsActive,
  MdPersonPin, MdAlarm, MdAssignmentTurnedIn, MdSchool, MdBuild, MdKeyboardReturn, MdClose,
} from 'react-icons/md';
import PropTypes from 'prop-types';
import { studentContext } from '../../context/studentContext';
import { UserContext } from '../../context/userContext';
import { SidebarWrapper, Div } from './styles';

function Sidebar({ showSideBar, setSideBar }) {
  const { setDisplayNotifications, displayNotifications } = useContext(studentContext);
  const { logout } = useContext(UserContext);
  const desktop = window.innerWidth > 768;
  return (
    <SidebarWrapper showSideBar={showSideBar}>
      <MdClose size="25px" onClick={() => setSideBar(false)} className="closeBtn" />
      <Div>
        <MdNotificationsActive color="white" size={desktop ? '2vw' : '20px'} onClick={(() => setDisplayNotifications(!displayNotifications))} />
        <MdPersonPin color="white" size={desktop ? '2vw' : '20px'} />
        <MdAlarm color="white" size={desktop ? '2vw' : '20px'} />
        <MdAssignmentTurnedIn color="white" size={desktop ? '2vw' : '20px'} />
        <MdSchool color="white" size={desktop ? '2vw' : '20px'} />
        <MdBuild color="white" size={desktop ? '2vw' : '20px'} />
      </Div>
      <MdKeyboardReturn onClick={() => logout()} color="white" size={desktop ? '2vw' : '20px'} />
    </SidebarWrapper>
  );
}

Sidebar.propTypes = {
  showSideBar: PropTypes.bool.isRequired,
  setSideBar: PropTypes.func.isRequired,
};

export default Sidebar;
