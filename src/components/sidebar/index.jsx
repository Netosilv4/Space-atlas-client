import React, { useContext } from 'react';

import {
  MdNotificationsActive,
  MdPersonPin, MdAlarm, MdSchool, MdBuild, MdKeyboardReturn, MdClose,
} from 'react-icons/md';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { H4 } from '../UI-Components/styles';
import { studentContext } from '../../context/studentContext';
import { UserContext } from '../../context/userContext';
import { SidebarWrapper, Div, SideBarTitle } from './styles';

function Sidebar({ showSideBar, setSideBar, history }) {
  const {
    setDisplayNotifications, displayNotifications, selected, student,
  } = useContext(studentContext);
  const { logout } = useContext(UserContext);
  const desktop = window.innerWidth > 768;
  return (
    <SidebarWrapper showSideBar={showSideBar}>
      <MdClose size="25px" onClick={() => setSideBar(false)} className="closeBtn" />
      <SideBarTitle showSideBar={showSideBar}>
        <img src="./avatarNeto.jpg" alt="Foto do estudante" />
        <span>
          Olá,
          {' '}
          { student.basicInfo.name.split(' ')[0]}
          {' '}
          !
        </span>
      </SideBarTitle>
      <Div>
        <H4
          select={displayNotifications}
          onClick={(() => setDisplayNotifications(!displayNotifications))}
        >
          <MdNotificationsActive color={displayNotifications ? 'rgb(245, 233, 96)' : 'white'} size={desktop ? '2vw' : '20px'} />
          NOTIFICAÇÕES
        </H4>
        <H4 onClick={() => history.push('/')} select={selected === '' || selected === '/'}>
          <MdPersonPin color={selected === '' || selected === '/' ? 'rgb(245, 233, 96)' : 'white'} size={desktop ? '2vw' : '20px'} />
          DETALHES
        </H4>
        <H4 onClick={() => history.push('/schedule')} select={selected === '/schedule'}>
          <MdAlarm color={selected === '/schedule' ? 'rgb(245, 233, 96)' : 'white'} size={desktop ? '2vw' : '20px'} />
          HORÁRIOS
        </H4>
        <H4 onClick={() => history.push('/grades')} select={selected === '/grades'}>
          <MdSchool color={selected === '/grades' ? 'rgb(245, 233, 96)' : 'white'} size={desktop ? '2vw' : '20px'} />
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
  history: PropTypes.objectOf(String).isRequired,
};

export default withRouter(Sidebar);
