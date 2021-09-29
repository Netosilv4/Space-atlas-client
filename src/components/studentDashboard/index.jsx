import React, { useContext } from 'react';
import { Main } from './styles';
import { studentContext } from '../../context/studentContext';
import Loading from '../loading';
import Notifications from './notifications';
import Header from '../Header';
import UserDetails from '../UserDetails';

function StudentDashboard() {
  const { student } = useContext(studentContext);

  return student ? (
    <Main>
      <Header />
      <Notifications />
      <UserDetails />
    </Main>
  ) : (
    <Main style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <Loading />
    </Main>
  );
}

export default StudentDashboard;
