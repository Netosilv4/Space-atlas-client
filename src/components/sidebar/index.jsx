import React, { useContext } from 'react';

import {
  MdNotificationsActive,
  MdPersonPin, MdAlarm, MdSchool, MdBuild, MdKeyboardReturn, MdClose,
} from 'react-icons/md';
import PropTypes from 'prop-types';
import { studentContext } from '../../context/studentContext';
import { UserContext } from '../../context/userContext';
import { SidebarWrapper, Div, H4 } from './styles';

function Sidebar({ showSideBar, setSideBar }) {
  const { setDisplayNotifications, displayNotifications } = useContext(studentContext);
  const { logout } = useContext(UserContext);
  const desktop = window.innerWidth > 768;
  return (
    <SidebarWrapper showSideBar={showSideBar}>
      <MdClose size="25px" onClick={() => setSideBar(false)} className="closeBtn" />
      <Div>
        <H4
          select={displayNotifications}
          onClick={(() => setDisplayNotifications(!displayNotifications))}
        >
          <MdNotificationsActive color={displayNotifications ? 'rgb(245, 233, 96)' : 'white'} size={desktop ? '2vw' : '20px'} />
          NOTIFICAÇÕES
        </H4>
        <H4>
          <MdPersonPin color="white" size={desktop ? '2vw' : '20px'} />
          DETALHES
        </H4>
        <H4>
          <MdAlarm color="white" size={desktop ? '2vw' : '20px'} />
          HORÁRIOS
        </H4>
        <H4>
          <MdSchool color="white" size={desktop ? '2vw' : '20px'} />
          AVALIAÇÕES
        </H4>
        <H4>
          <MdBuild color="white" size={desktop ? '2vw' : '20px'} />
          CONFIGURAÇÕES
        </H4>
      </Div>
      <MdKeyboardReturn onClick={() => logout()} color="white" size={desktop ? '2vw' : '20px'} style={{ margin: '1vh 2vw' }} />
    </SidebarWrapper>
  );
}

Sidebar.propTypes = {
  showSideBar: PropTypes.bool.isRequired,
  setSideBar: PropTypes.func.isRequired,
};

export default Sidebar;
