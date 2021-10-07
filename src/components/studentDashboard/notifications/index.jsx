import React, { useContext } from 'react';
import { MdNotificationsActive, MdClose } from 'react-icons/md';
import {
  Container, HeaderWrapper, NotTitle, Button, Li, P,
} from './styles';
import { studentContext } from '../../../context/studentContext';

function Notifications() {
  const { displayNotifications, setDisplayNotifications } = useContext(studentContext);
  const desktop = window.innerWidth > 768;
  return (
    <Container show={displayNotifications}>
      <MdClose
        color="black"
        size={desktop ? '2vw' : '25px'}
        onClick={() => setDisplayNotifications(!displayNotifications)}
        className="closeBtn"
      />
      <HeaderWrapper>
        <MdNotificationsActive color="black" size={desktop ? '2vw' : '20px'} />
        <NotTitle>NOTIFICAÇÕES</NotTitle>
      </HeaderWrapper>
      <Button>Limpar Todas</Button>
      <Li>- Foi aceita a solicitação para mudança de email conforme solicitado!</Li>
      <P>05/10/21</P>
      <Li>- Notas de Cálculo 2 atualizadas</Li>
      <P>03/10/21</P>
    </Container>
  );
}

export default Notifications;
