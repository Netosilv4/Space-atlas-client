import React, { useContext } from 'react';

import {
  MdNotificationsActive,
  MdPersonPin, MdAlarm, MdAssignmentTurnedIn, MdSchool, MdBuild, MdKeyboardReturn,
} from 'react-icons/md';
import { studentContext } from '../../context/studentContext';
import { UserContext } from '../../context/userContext';

import { SidebarWrapper } from './styles';

function Sidebar() {
  const { setDisplayNotifications, displayNotifications } = useContext(studentContext);
  const { logout } = useContext(UserContext);
  return (
    <SidebarWrapper>
      <MdNotificationsActive color="white" size="2vw" onClick={(() => setDisplayNotifications(!displayNotifications))} />
      <MdPersonPin color="white" size="2vw" />
      <MdAlarm color="white" size="2vw" />
      <MdAssignmentTurnedIn color="white" size="2vw" />
      <MdSchool color="white" size="2vw" />
      <MdBuild color="white" size="2vw" />
      <MdKeyboardReturn onClick={() => logout()} color="white" size="2vw" style={{ position: 'absolute', bottom: '10%' }} />
    </SidebarWrapper>
  );
}

export default Sidebar;
