import React, { useContext } from 'react';
import { MdClear, MdNotificationsActive } from 'react-icons/md';
import {
  Container, HeaderWrapper, NotTitle,
} from './styles';
import { DashboardButton } from '../styles';
import { studentContext } from '../../../context/studentContext';

function Notifications() {
  const { displayNotifications, setDisplayNotifications } = useContext(studentContext);
  return (
    <Container show={displayNotifications}>
      <HeaderWrapper>
        <MdNotificationsActive color="white" size="2vw" />
        <NotTitle>Notificações</NotTitle>
        <MdClear
          color="white"
          size="2vw"
          style={{ cursor: 'pointer' }}
          onClick={() => setDisplayNotifications(!displayNotifications)}
        />
      </HeaderWrapper>
      <DashboardButton style={{ backgroundColor: 'white', color: '#243B57' }}>Limpar Todas</DashboardButton>
    </Container>
  );
}

export default Notifications;
